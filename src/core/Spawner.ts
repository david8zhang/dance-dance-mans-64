import Game from '~/scenes/Game'
import { Constants, Direction } from '~/util/Constants'
import { Arrow } from './Arrow'

export interface SongConfig {
  bpm: number
  name: string
  initialDelayDiff?: number
}

export class Spawner {
  private game: Game
  private static SPAWN_POSITIONS = {
    left: { x: 50, y: Constants.GAME_HEIGHT },
    up: { x: 110, y: Constants.GAME_HEIGHT },
    down: { x: 170, y: Constants.GAME_HEIGHT },
    right: { x: 230, y: Constants.GAME_HEIGHT },
  }
  public arrows: Arrow[] = []
  public arrowSpawnEvent!: Phaser.Time.TimerEvent
  public currNoteIndex: number = 0
  public songConfig: SongConfig = Constants.SONG_CONFIGS[2]

  constructor(game: Game) {
    this.game = game
    this.setupSong(this.songConfig)
  }

  setSongConfig(songConfig: SongConfig) {
    this.songConfig = songConfig
  }

  setupSong(songConfig: SongConfig) {
    let initialDelay = Constants.INITIAL_DELAY
    if (songConfig.initialDelayDiff) {
      initialDelay = Constants.INITIAL_DELAY - songConfig.initialDelayDiff
    }
    this.game.time.delayedCall(initialDelay, () => {
      this.game.sound.play(songConfig.name)
    })
    const arrowDelay = 60000 / songConfig.bpm
    this.arrowSpawnEvent = this.game.time.addEvent({
      delay: arrowDelay,
      callback: () => {
        this.spawnArrow()
      },
      repeat: -1,
    })
  }

  spawnArrow() {
    const randDirection = Constants.getRandomDirection()
    const arrow = new Arrow(this.game, {
      direction: randDirection,
      position: Spawner.SPAWN_POSITIONS[randDirection],
    })
    arrow.setVelocity(0, -100)
    this.arrows.push(arrow)
  }

  getArrows() {
    return this.arrows
  }
}
