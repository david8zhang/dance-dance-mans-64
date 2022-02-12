import Phaser from 'phaser'
import { InputArrowZone } from '~/core/InputArrowZone'
import { Spawner } from '~/core/Spawner'
import { Constants } from '~/util/Constants'

export default class Game extends Phaser.Scene {
  public inputArrowZone!: InputArrowZone
  public spawner!: Spawner

  constructor() {
    super('game')
  }

  create() {
    this.sound.pauseOnBlur = false
    this.setupWorldBounds()
    this.spawner = new Spawner(this)
    this.cameras.main.setBackgroundColor('#3498db')
    this.inputArrowZone = new InputArrowZone(this)
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
