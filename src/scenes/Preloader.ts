export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preload')
  }

  preload() {
    this.load.image('arrow-down', 'arrowDown.png')
    this.load.image('arrow-up', 'arrowUp.png')
    this.load.image('arrow-left', 'arrowLeft.png')
    this.load.image('arrow-right', 'arrowRight.png')

    // Songs
    this.load.audio('this-way-demo', 'songs/this-way-demo.mp3')
    this.load.audio('way-in-my-brain', 'songs/way-in-my-brain.mp3')
    this.load.audio('funny-thing', 'songs/funny-thing.mp3')
    this.load.audio('lose-control', 'songs/lose-control.mp3')
  }

  create() {
    this.scene.start('game')
  }
}
