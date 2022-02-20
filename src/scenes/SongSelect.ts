import { SongConfig } from '~/core/Spawner'
import { ScrollList } from '~/ui/ScrollList'
import { Text } from '../ui/Text'
import { Constants } from '~/util/Constants'
import { SONG_CONFIGS } from '~/util/SongConfigs'
import { Button } from '~/ui/Button'

export class SongSelect extends Phaser.Scene {
  public domElementsContainer!: Phaser.GameObjects.Container
  public selectedSong: SongConfig | null = null
  public selectedSongText!: HTMLElement
  public video!: Phaser.GameObjects.Video
  public buttonDom!: Phaser.GameObjects.DOMElement

  constructor() {
    super('songselect')
  }

  selectSong(songName: string) {
    const song = SONG_CONFIGS.find((s) => s.name === songName)
    this.sound.stopAll()
    if (this.video) this.video.stop()
    if (song) {
      this.selectedSong = song

      if (!song.isVideo) {
        const songKey = this.sound.add(this.selectedSong.key)
        this.selectedSongText.innerText = this.selectedSong.name
        const marker: Phaser.Types.Sound.SoundMarker = {
          name: 'offset',
          start: songKey.duration / 3,
          config: {
            loop: true,
          },
        }
        this.sound.play(this.selectedSong.key, marker)
      } else {
        this.video = this.add.video(0, 0, this.selectedSong.key)
        this.video.displayHeight = 0
        this.video.displayWidth = 0
        this.video.play(true, this.video.video.duration / 3)
      }
      this.buttonDom.setVisible(true)
    }
  }

  create() {
    this.sound.pauseOnBlur = false
    this.cameras.main.setBackgroundColor(Constants.BG_COLOR)
    this.domElementsContainer = this.add.container(0, 0)

    // Start button
    const startButton = Button('Play')
    this.buttonDom = this.add
      .dom(20, Constants.GAME_HEIGHT - 50, startButton)
      .addListener('click')
      .on('click', () => {
        this.sound.stopAll()
        this.scene.start('game', { songConfig: this.selectedSong })
      })
      .setVisible(false)
    this.buttonDom.setPosition(
      startButton.clientWidth / 2 + 20,
      Constants.GAME_HEIGHT - (startButton.clientHeight / 2 + 20)
    )

    // Selected song
    this.selectedSongText = Text('Select a song', {
      fontSize: 30,
      color: 'white',
      margin: '0px',
    }) as HTMLElement
    const selectedSongDom = this.add.dom(20, 20, this.selectedSongText)
    selectedSongDom.setPosition(
      this.selectedSongText.clientWidth / 2 + 20,
      this.selectedSongText.clientHeight / 2 + 10
    )

    // Song list
    const songList = ScrollList(SONG_CONFIGS) as HTMLElement
    this.add
      .dom(Constants.GAME_WIDTH - 100, Constants.GAME_HEIGHT / 2, songList)
      .addListener('click')
      .on('click', (data) => {
        this.selectSong(data.path[0].innerText)
      })
  }
}
