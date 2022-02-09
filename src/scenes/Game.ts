import Phaser from 'phaser'
import { InputArrowZone } from '~/core/InputArrowZone'

export default class Game extends Phaser.Scene {
  public inputArrowZone!: InputArrowZone
  constructor() {
    super('game')
  }

  create() {
    this.cameras.main.setBackgroundColor('#3498db')
    this.inputArrowZone = new InputArrowZone(this)
  }
}
