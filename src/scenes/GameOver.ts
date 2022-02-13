import { Constants } from '~/util/Constants'

export class GameOver extends Phaser.Scene {
  constructor() {
    super('gameover')
  }

  create() {
    const text1 = this.add.text(0, 0, 'Press Space to Restart')
    const text2 = this.add.text(0, 0, 'Press Escape to go back to song select')
    text1.setPosition(
      Constants.GAME_WIDTH / 2 - text1.width / 2,
      Constants.GAME_HEIGHT / 2 - text1.height / 2 - 20
    )
    text2.setPosition(
      Constants.GAME_WIDTH / 2 - text2.width / 2,
      Constants.GAME_HEIGHT / 2 - text2.height / 2
    )
    this.input.keyboard.on('keydown', (event) => {
      if (event.code === 'Space') {
        this.scene.start('game')
      }
      if (event.code === 'Escape') {
        this.scene.start('songselect')
      }
    })
  }
}
