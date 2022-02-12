import { Constants } from '~/util/Constants'

export class GameOver extends Phaser.Scene {
  constructor() {
    super('gameover')
  }

  create() {
    const text = this.add.text(0, 0, 'Press Space to Restart')
    text.setPosition(
      Constants.GAME_WIDTH / 2 - text.width / 2,
      Constants.GAME_HEIGHT / 2 - text.height / 2
    )
    this.input.keyboard.on('keydown', (event) => {
      if (event.code === 'Space') {
        this.scene.start('game')
      }
    })
  }
}
