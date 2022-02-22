export const createBackgroundAnims = (anims: Phaser.Animations.AnimationManager) => {
  anims.create({
    key: 'freestyle-dance',
    frames: anims.generateFrameNames('freestyle-dance', {
      start: 0,
      end: 54,
      suffix: '.png',
    }),
    repeat: -1,
    frameRate: 10,
  })
  anims.create({
    key: 'winnie-the-pooh',
    frames: anims.generateFrameNames('winnie-the-pooh', {
      start: 0,
      end: 101,
      suffix: '.png',
    }),
    repeat: -1,
    frameRate: 24,
  })
  anims.create({
    key: 'bg-disco',
    frames: anims.generateFrameNames('bg-disco', {
      start: 0,
      end: 49,
      suffix: '.png',
    }),
    repeat: -1,
    frameRate: 10,
  })
}
