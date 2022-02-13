import Phaser from 'phaser'
import { Healthbar } from '~/core/Health'
import { InputArrowZone } from '~/core/InputArrowZone'
import { SongConfig, Spawner } from '~/core/Spawner'
import { Constants } from '~/util/Constants'

export default class Game extends Phaser.Scene {
  public inputArrowZone!: InputArrowZone
  public spawner!: Spawner
  public healthBar!: Healthbar
  public selectedSongConfig!: SongConfig

  constructor() {
    super('game')
  }

  init(data) {
    this.selectedSongConfig = data.songConfig
  }

  create() {
    this.sound.pauseOnBlur = false
    this.setupWorldBounds()
    this.spawner = new Spawner(this, this.selectedSongConfig)
    this.cameras.main.setBackgroundColor(Constants.BG_COLOR)
    this.inputArrowZone = new InputArrowZone(this)
    this.healthBar = new Healthbar(this, {
      maxHealth: Constants.MAX_HEALTH,
      length: Constants.HEALTHBAR_WIDTH,
      width: Constants.HEALTHBAR_HEIGHT,
      position: {
        x: Constants.HEALTHBAR_WIDTH / 2 + 20,
        y: Constants.GAME_HEIGHT - Constants.HEALTHBAR_HEIGHT - 10,
      },
    })
  }

  setupWorldBounds() {
    this.physics.world.setBounds(
      0,
      0,
      Constants.GAME_WIDTH,
      Constants.GAME_HEIGHT,
      true,
      true,
      true,
      false
    )
    this.physics.world.on('worldbounds', (obj) => {
      obj.gameObject.destroy()
    })
  }
}
