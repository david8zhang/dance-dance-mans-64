import { Text } from '~/ui/Text'
import { Constants, Rank } from '~/util/Constants'

export class GameOver extends Phaser.Scene {
  public rank!: Rank
  public didFinish!: boolean

  constructor() {
    super('gameover')
  }

  init(data) {
    this.rank = data.rank
    this.didFinish = data.didFinish
  }

  create() {
    if (this.didFinish) {
      const scoreTitleText = Text('Your Rank', {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Graffiti',
        margin: '0px',
      }) as HTMLElement
      const scoreTitleTextDom = this.add.dom(0, 0, scoreTitleText)
      scoreTitleTextDom.setPosition(
        Constants.GAME_WIDTH / 2,
        Constants.GAME_HEIGHT / 2 - scoreTitleText.clientHeight / 2 - 120
      )
      // Score Text
      const scoreText = Text(this.rank.toString(), {
        fontSize: 50,
        color: 'white',
        fontFamily: 'Graffiti',
        margin: '0px',
      }) as HTMLElement
      const selectedSongDom = this.add.dom(0, 0, scoreText)
      selectedSongDom.setPosition(
        Constants.GAME_WIDTH / 2,
        Constants.GAME_HEIGHT / 2 - scoreText.clientHeight / 2 - 50
      )
    } else {
      // Failure Text
      const scoreText = Text('FAILURE!', {
        fontSize: 50,
        color: 'white',
        fontFamily: 'Graffiti',
        margin: '0px',
      }) as HTMLElement
      const selectedSongDom = this.add.dom(0, 0, scoreText)
      selectedSongDom.setPosition(
        Constants.GAME_WIDTH / 2,
        Constants.GAME_HEIGHT / 2 - scoreText.clientHeight / 2 - 60
      )
    }

    const text1 = this.add.text(0, 0, 'Press Space to Restart', { fontFamily: 'Graffiti' })
    const text2 = this.add.text(0, 0, 'Press Escape to go back to song select', {
      fontFamily: 'Graffiti',
    })
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
