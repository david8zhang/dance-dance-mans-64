import Game from '~/scenes/Game'
import { Constants, Direction } from '~/util/Constants'
import { Arrow } from './Arrow'

export interface SongConfig {
  bpm: number
  name: string
  key: string
  initialDelayDiff?: number
  bgAnim?: string
  isVideo?: boolean
}

export class Spawner {
  private game: Game
  public arrows: Arrow[] = []
  public arrowSpawnEvent!: Phaser.Time.TimerEvent
  public currNoteIndex: number = 0
  public songConfig: SongConfig
  public song!: Phaser.Sound.BaseSound
  public totalNumNotes: number = 0

  constructor(game: Game, songConfig: SongConfig) {
    this.game = game
    this.songConfig = songConfig
    this.setupSong(this.songConfig)
    this.checkLastArrow()

    this.game.input.keyboard.on('keydown', (event) => {
      if (event.code === 'Space') {
        this.song.destroy()
        this.game.scene.restart()
      }
    })
  }

  checkLastArrow() {
    this.game.time.addEvent({
      repeat: -1,
      delay: 1000,
      callback: () => {
        const activeArrow = this.arrows.find((a) => a.sprite.active)
        if (activeArrow === undefined) {
          this.game.time.delayedCall(3000, () => {
            this.game.scene.start('gameover', {
              score: this.game.score.score,
            })
          })
        }
      },
    })
  }

  setSongConfig(songConfig: SongConfig) {
    this.songConfig = songConfig
  }

  setupVideo(songConfig: SongConfig) {
    const video = this.game.add.video(
      Constants.GAME_WIDTH / 2,
      Constants.GAME_HEIGHT / 2,
      songConfig.key
    )

    video.displayWidth = 0
    video.displayHeight = 0

    this.totalNumNotes = Math.floor((songConfig.bpm * video.video.duration) / 60)
    let initialDelay = Constants.INITIAL_DELAY
    if (songConfig.initialDelayDiff) {
      initialDelay = Constants.INITIAL_DELAY + songConfig.initialDelayDiff
    }
    this.game.time.delayedCall(initialDelay, () => {
      video.displayWidth = Constants.GAME_WIDTH
      video.displayHeight = Constants.GAME_HEIGHT
      video.play(false, 0)
    })
    const arrowDelay = 60000 / songConfig.bpm
    this.arrowSpawnEvent = this.game.time.addEvent({
      delay: arrowDelay,
      callback: () => {
        this.spawnArrow()
      },
      repeat: -1,
    })
    video.on('complete', () => {
      this.arrowSpawnEvent.remove()
    })
  }

  setupSong(songConfig: SongConfig) {
    if (songConfig.isVideo) {
      this.setupVideo(songConfig)
    } else {
      this.song = this.game.sound.add(songConfig.key)
      this.totalNumNotes = Math.floor((songConfig.bpm * this.song.duration) / 60)
      let initialDelay = Constants.INITIAL_DELAY
      if (songConfig.initialDelayDiff) {
        initialDelay = Constants.INITIAL_DELAY + songConfig.initialDelayDiff
      }
      this.game.time.delayedCall(initialDelay, () => {
        this.song.play()
      })
      const arrowDelay = 60000 / songConfig.bpm
      this.arrowSpawnEvent = this.game.time.addEvent({
        delay: arrowDelay,
        callback: () => {
          this.spawnArrow()
        },
        repeat: -1,
      })
      this.song.on('complete', () => {
        this.arrowSpawnEvent.remove()
      })
    }
  }

  spawnArrow() {
    if (this.arrows.length < this.totalNumNotes) {
      const randDirection = Constants.getRandomDirection()
      const arrow = new Arrow(this.game, {
        direction: randDirection,
        position: Constants.ARROW_SPAWN_POSITIONS[randDirection],
      })
      arrow.setVelocity(0, -100)
      this.arrows.push(arrow)
    }
  }

  getArrows() {
    return this.arrows
  }
}
