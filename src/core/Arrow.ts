import Game from '~/scenes/Game'
import { Direction } from '~/util/Constants'

export interface ArrowConfig {
  position: { x: number; y: number }
  direction: Direction
}

export class Arrow {
  public game: Game
  public direction: Direction
  public sprite: Phaser.Physics.Arcade.Sprite

  constructor(game: Game, config: ArrowConfig) {
    this.game = game
    this.direction = config.direction

    const { x, y } = config.position
    this.sprite = this.game.physics.add.sprite(x, y, `arrow-${config.direction}`)
    this.sprite.setTintFill(0xff0000)
    this.sprite.body.setSize(0.1 * this.sprite.width, 0.1 * this.sprite.height)

    const spriteBody = this.sprite.body as Phaser.Physics.Arcade.Body
    spriteBody.setCollideWorldBounds(true)
    spriteBody.onWorldBounds = true
  }

  setVelocity(x: number, y: number) {
    this.sprite.setVelocity(x, y)
  }
}
