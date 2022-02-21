import Game from '~/scenes/Game'
import { Constants, Direction } from '~/util/Constants'

export interface InputArrowConfig {
  position: {
    x: number
    y: number
  }
  direction: Direction
}

export class InputArrow {
  private game: Game
  public direction: Direction
  public sprite: Phaser.Physics.Arcade.Sprite

  constructor(game: Game, config: InputArrowConfig) {
    this.game = game
    this.direction = config.direction

    const { x, y } = config.position
    this.sprite = this.game.physics.add
      .sprite(x, y, `arrow-${config.direction}`)
      .setTintFill(0xffffff)
    console.log(this.sprite.displayWidth)
  }

  removeOverlappingArrow() {
    const arrowsOnScreen = this.game.spawner.getArrows()
    let overlappingArrow
    let overlappingYDiff
    arrowsOnScreen.forEach((arrow) => {
      const arrowSprite = arrow.sprite
      let yDiff = Math.abs(this.sprite.y - arrowSprite.y)
      const xDiff = Math.abs(this.sprite.x - arrowSprite.x)
      if (yDiff < Constants.ARROW_DIFF_DIST && xDiff == 0 && arrow.sprite.active) {
        overlappingYDiff = yDiff
        overlappingArrow = arrowSprite
      }
    })
    if (overlappingArrow) {
      this.game.processInputSuperlative(overlappingYDiff)
      this.game.healthBar.increaseHealth(Constants.REGAIN_HEALTH_AMOUNT)
      overlappingArrow.destroy()
    } else {
      this.game.processMiss()
      this.game.healthBar.decreaseHealth(Constants.MISSED_HEALTH_DAMAGE)
    }
  }

  highlight() {
    this.sprite.setTintFill(0xffff00)
  }

  dehighlight() {
    this.sprite.setTintFill(0xffffff)
  }
}
