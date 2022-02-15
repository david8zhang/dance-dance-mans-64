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
    this.sprite = this.game.physics.add.sprite(x, y, `arrow-${config.direction}`)
    this.game.physics.world.enableBody(this.sprite, Phaser.Physics.Arcade.DYNAMIC_BODY)
    this.sprite.body.setSize(this.sprite.width * 0.1, this.sprite.height * 0.1)
  }

  removeOverlappingArrow() {
    const arrowsOnScreen = this.game.spawner.getArrows()
    let overlappingArrow
    arrowsOnScreen.forEach((arrow) => {
      const arrowSprite = arrow.sprite
      let yDiff = Math.abs(this.sprite.y - arrowSprite.y)
      const xDiff = Math.abs(this.sprite.x - arrowSprite.x)
      if (yDiff < Constants.ARROW_DIFF_DIST && xDiff == 0 && arrow.sprite.active) {
        overlappingArrow = arrowSprite
      }
    })
    if (overlappingArrow) {
      overlappingArrow.destroy()
    } else {
      this.game.healthBar.decreaseHealth(Constants.MISSED_HEALTH_DAMAGE)
    }
  }

  highlight() {
    this.sprite.setTintFill(0xffff00)
  }

  dehighlight() {
    this.sprite.setTintFill(0x000000)
  }
}
