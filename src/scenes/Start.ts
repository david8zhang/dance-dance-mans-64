import { createBackgroundAnims } from '~/anims/BackgroundAnims'
import { Button } from '~/ui/Button'
import { Text } from '~/ui/Text'
import { Constants } from '~/util/Constants'

export default class Start extends Phaser.Scene {
  constructor() {
    super('start')
  }

  create() {
    createBackgroundAnims(this.anims)
    const text = this.add
      .text(Constants.GAME_WIDTH / 2, Constants.GAME_HEIGHT / 2, 'Dance Dance Man 64', {
        fontSize: '50px',
        color: 'white',
        fontFamily: 'Graffiti',
      })
      .setDepth(100)

    const bgSprite = this.add.sprite(
      Constants.GAME_WIDTH / 2,
      Constants.GAME_HEIGHT / 2,
      'bg-disco'
    )
    bgSprite.displayHeight = Constants.GAME_HEIGHT
    bgSprite.displayWidth = Constants.GAME_WIDTH
    bgSprite.anims.play('bg-disco')

    // const video = this.add.video(Constants.GAME_WIDTH / 2, Constants.GAME_HEIGHT / 2, 'dance-bg')
    // video.displayWidth = Constants.GAME_WIDTH
    // video.displayHeight = Constants.GAME_HEIGHT
    // video.play(true)

    text.setPosition(
      Constants.GAME_WIDTH / 2 - text.displayWidth / 2,
      Constants.GAME_HEIGHT / 2 - text.displayHeight / 2 - 75
    )
    const button = Button('Start')
    this.add
      .dom(Constants.GAME_WIDTH / 2, Constants.GAME_HEIGHT / 2, button)
      .addListener('click')
      .on('click', () => {
        this.scene.start('songselect')
      })
      .setDepth(100)
  }
}
