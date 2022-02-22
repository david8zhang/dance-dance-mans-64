import { ASSETS, Constants } from '~/util/Constants'

export interface AssetConfig {
  type: string
  key: string
  path: string[]
}

export default class Preloader extends Phaser.Scene {
  public loaded: string[] = []
  public loadingText!: Phaser.GameObjects.Text

  constructor() {
    super('preload')
  }

  loadAsset(assetConfig: AssetConfig) {
    switch (assetConfig.type) {
      case 'image': {
        this.load.image(assetConfig.key, assetConfig.path[0])
        break
      }
      case 'video': {
        this.load.video(assetConfig.key, assetConfig.path[0])
        break
      }
      case 'audio': {
        this.load.audio(assetConfig.key, assetConfig.path[0])
        break
      }
      case 'atlas': {
        this.load.atlas(assetConfig.key, assetConfig.path[0], assetConfig.path[1])
        break
      }
    }
  }

  preload() {
    ASSETS.forEach((asset) => {
      this.loadAsset(asset)
    })
    this.loadingText = this.add.text(0, 0, `Loading: ${this.loaded.length / ASSETS.length}%`, {
      fontSize: '30px',
    })
    this.loadingText.setPosition(
      Constants.GAME_WIDTH / 2 - this.loadingText.displayWidth / 2,
      Constants.GAME_HEIGHT / 2 - this.loadingText.displayHeight / 2
    )

    this.load.on('complete', (e) => {
      this.scene.start('start')
    })

    this.load.on('filecomplete', (e) => {
      this.loaded.push(e)
      this.loadingText.setText(
        `Loading: ${Math.round((this.loaded.length / ASSETS.length) * 100)}%`
      )
    })
    this.load.on('loaderror', (e) => {
      console.log(e)
    })
  }

  create() {
    this.scene.start('start')
  }
}
