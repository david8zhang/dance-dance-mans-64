import { SONG_CONFIGS } from './SongConfigs'

export enum Direction {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

export class Constants {
  public static GAME_WIDTH = 800
  public static GAME_HEIGHT = 600

  public static ARROW_DIFF_DIST = 30
  public static INITIAL_DELAY = 5680

  public static ARROW_SPAWN_POSITIONS = {
    left: { x: 50, y: Constants.GAME_HEIGHT },
    up: { x: 110, y: Constants.GAME_HEIGHT },
    down: { x: 170, y: Constants.GAME_HEIGHT },
    right: { x: 230, y: Constants.GAME_HEIGHT },
  }

  public static getRandomDirection() {
    const randomNum = Math.floor(Math.random() * 4)
    const directions = [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT]
    return directions[randomNum]
  }

  public static getRandomSongConfig() {
    const randomIndex = Math.floor(Math.random() * SONG_CONFIGS.length)
    return SONG_CONFIGS[randomIndex]
  }
}
