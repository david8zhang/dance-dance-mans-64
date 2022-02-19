import Phaser from 'phaser'
import { createBackgroundAnims } from '~/anims/BackgroundAnims'
import { Healthbar } from '~/core/Health'
import { InputArrowZone } from '~/core/InputArrowZone'
import { Score } from '~/core/Score'
import { SongConfig, Spawner } from '~/core/Spawner'
import { UINumber } from '~/core/UINumber'
import { Constants } from '~/util/Constants'

export default class Game extends Phaser.Scene {
  public inputArrowZone!: InputArrowZone
  public spawner!: Spawner
  public healthBar!: Healthbar
  public selectedSongConfig!: SongConfig
  public score!: Score
  public sprite!: Phaser.GameObjects.Sprite

  constructor() {
    super('game')
  }

  init(data) {
    this.selectedSongConfig = data.songConfig
  }

  setupBackgroundAnim() {
    this.sprite = this.add.sprite(Constants.GAME_WIDTH / 2, Constants.GAME_HEIGHT / 2, '')
    this.sprite.anims.play('freestyle-dance')
    this.sprite.displayWidth = Constants.GAME_WIDTH
    this.sprite.displayHeight = Constants.GAME_HEIGHT
  }

  create() {
    createBackgroundAnims(this.anims)
    this.setupBackgroundAnim()
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
      onLoseAllHealthHandler: () => {
        this.sound.stopAll()
        this.scene.start('gameover', {
          score: this.score.score,
        })
      },
    })
    this.score = new Score(this)
  }

  processInputSuperlative(yDiff: number) {
    const superlative = Constants.getSuperlative(yDiff)
    if (superlative) {
      UINumber.createNumber(superlative, this, 300, 40, 'white')
      const score = Constants.SUPERLATIVE_SCORE[superlative]
      this.score.addScore(score)
    }
  }

  processMiss() {
    UINumber.createNumber('Miss', this, 300, 40, 'red')
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
      this.healthBar.decreaseHealth(Constants.MISSED_HEALTH_DAMAGE)
    })
  }
}
