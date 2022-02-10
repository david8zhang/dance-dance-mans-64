import Phaser from 'phaser'
import { InputArrowZone } from '~/core/InputArrowZone'
import { Spawner } from '~/core/Spawner'

export default class Game extends Phaser.Scene {
  public inputArrowZone!: InputArrowZone
  public spawner!: Spawner

  constructor() {
    super('game')
  }

  create() {
    this.cameras.main.setBackgroundColor('#3498db')
    this.inputArrowZone = new InputArrowZone(this)
    this.spawner = new Spawner(this)
  }
}
