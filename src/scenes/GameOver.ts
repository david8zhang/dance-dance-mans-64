import { Text } from '~/ui/Text'
import { Constants } from '~/util/Constants'

export class GameOver extends Phaser.Scene {
  public score: number = 0

  constructor() {
    super('gameover')
  }

  init(data) {
    console.log(data)
    this.score = data.score
  }

  create() {
    const scoreTitleText = Text('Your Score', {
      fontSize: 20,
      color: 'white',
      margin: '0px',
    }) as HTMLElement
    const scoreTitleTextDom = this.add.dom(0, 0, scoreTitleText)
    scoreTitleTextDom.setPosition(
      Constants.GAME_WIDTH / 2,
      Constants.GAME_HEIGHT / 2 - scoreTitleText.clientHeight / 2 - 120
    )

    // Score Text
    const scoreText = Text(this.score.toString(), {
      fontSize: 40,
      color: 'white',
      margin: '0px',
    }) as HTMLElement
    const selectedSongDom = this.add.dom(0, 0, scoreText)
    selectedSongDom.setPosition(
      Constants.GAME_WIDTH / 2,
      Constants.GAME_HEIGHT / 2 - scoreText.clientHeight / 2 - 60
    )

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
