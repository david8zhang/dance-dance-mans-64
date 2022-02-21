export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preload')
  }

  preload() {
    this.load.image('arrow-down', 'arrowDown.png')
    this.load.image('arrow-up', 'arrowUp.png')
    this.load.image('arrow-left', 'arrowLeft.png')
    this.load.image('arrow-right', 'arrowRight.png')

    this.load.atlas(
      'freestyle',
      'animations/freestyle-dance.png',
      'animations/freestyle-dance.json'
    )
    this.load.atlas(
      'winnie-the-pooh',
      'animations/winnie-the-pooh.png',
      'animations/winnie-the-pooh.json'
    )

    // Songs
    this.load.audio('way-in-my-brain', 'songs/way-in-my-brain.mp3')
    this.load.audio('funny-thing', 'songs/funny-thing.mp3')
    this.load.audio('sahara', 'songs/sahara.mp3')
    this.load.audio('eyewitness', 'songs/eyewitness.mp3')
    this.load.audio('eyewitness2', 'songs/eyewitness2.mp3')
    this.load.audio('rather-be', 'songs/rather-be.mp3')

    this.load.video('howard', 'songs/howard.mp4')
    this.load.video('microsoft', 'songs/microsoft.mp4')
    this.load.video('bioware', 'songs/bioware.mp4')
    this.load.video('bozo', 'songs/bozo.mp4')
    this.load.video('dance-bg', 'songs/background.mp4')
  }

  create() {
    this.scene.start('start')
  }
}
