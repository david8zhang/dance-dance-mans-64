export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preload')
  }

  preload() {
    this.load.image('arrow-down', 'arrowDown.png')
    this.load.image('arrow-up', 'arrowUp.png')
    this.load.image('arrow-left', 'arrowLeft.png')
    this.load.image('arrow-right', 'arrowRight.png')
  }

  create() {
    this.scene.start('game')
  }
}
