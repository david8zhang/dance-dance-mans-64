import Game from '~/scenes/Game'
import { Direction } from '~/util/Constants'

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
    this.sprite = this.game.physics.add.sprite(x, y, `arrow-${config.direction}`).setScale(0.5)
    this.game.physics.world.enableBody(this.sprite, Phaser.Physics.Arcade.DYNAMIC_BODY)
  }
}
