import { SONG_CONFIGS } from './SongConfigs'

export const ASSETS = [
  {
    type: 'image',
    key: 'arrow-down',
    path: ['arrowDown.png'],
  },
  {
    type: 'image',
    key: 'arrow-up',
    path: ['arrowUp.png'],
  },
  {
    type: 'image',
    key: 'arrow-left',
    path: ['arrowLeft.png'],
  },
  {
    type: 'image',
    key: 'arrow-right',
    path: ['arrowRight.png'],
  },
  {
    type: 'atlas',
    key: 'freestyle-dance',
    path: ['animations/freestyle-dance.png', 'animations/freestyle-dance.json'],
  },
  {
    type: 'atlas',
    key: 'winnie-the-pooh',
    path: ['animations/winnie-the-pooh.png', 'animations/winnie-the-pooh.json'],
  },
  {
    type: 'atlas',
    key: 'bg-disco',
    path: ['animations/bg-disco.png', 'animations/bg-disco.json'],
  },
  {
    type: 'audio',
    key: 'way-in-my-brain',
    path: ['songs/way-in-my-brain.mp3'],
  },
  {
    type: 'audio',
    key: 'funny-thing',
    path: ['songs/funny-thing.mp3'],
  },
  {
    type: 'audio',
    key: 'sahara',
    path: ['songs/sahara.mp3'],
  },
  {
    type: 'audio',
    key: 'eyewitness',
    path: ['songs/eyewitness.mp3'],
  },
  {
    type: 'audio',
    key: 'eyewitness2',
    path: ['songs/eyewitness2.mp3'],
  },
  {
    type: 'audio',
    key: 'rather-be',
    path: ['songs/rather-be.mp3'],
  },
  {
    type: 'video',
    key: 'howard',
    path: ['songs/howard.webm'],
  },
  {
    type: 'video',
    key: 'bioware',
    path: ['songs/bioware.webm'],
  },
  {
    type: 'video',
    key: 'bozo',
    path: ['songs/bozo.webm'],
  },
]

export enum Direction {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

export enum Superlative {
  Good = 'Good',
  Great = 'Great',
  Perfect = 'Perfect',
}

export enum Rank {
  S = 'S',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}

export class Constants {
  public static GAME_WIDTH = 800
  public static GAME_HEIGHT = 600
  public static BG_COLOR = '#000000'

  public static ARROW_DIFF_DIST = 25
  public static INITIAL_DELAY = 5680

  // healthbar
  public static MAX_HEALTH = 100
  public static HEALTHBAR_WIDTH = 235
  public static HEALTHBAR_HEIGHT = 20
  public static MISSED_HEALTH_DAMAGE = 10
  public static REGAIN_HEALTH_AMOUNT = 5

  // double note chance
  public static DOUBLE_NOTE_CHANCE = 10

  public static ARROW_SPAWN_POSITIONS = {
    left: { x: 50, y: Constants.GAME_HEIGHT },
    up: { x: 110, y: Constants.GAME_HEIGHT },
    down: { x: 170, y: Constants.GAME_HEIGHT },
    right: { x: 230, y: Constants.GAME_HEIGHT },
  }

  public static SUPERLATIVE_SCORE = {
    [Superlative.Good]: 10,
    [Superlative.Great]: 15,
    [Superlative.Perfect]: 20,
  }

  static getRandomNumber(min: number, max: number, isFloat: boolean = false) {
    if (isFloat) {
      return Math.random() * (max - min) + min
    }
    return Math.floor(Math.random() * (max - min) + min)
  }

  public static getRandomDoubleDirection() {
    const directionPairings = [
      [Direction.LEFT, Direction.RIGHT],
      [Direction.UP, Direction.RIGHT],
      [Direction.UP, Direction.LEFT],
      [Direction.DOWN, Direction.LEFT],
      [Direction.DOWN, Direction.RIGHT],
    ]
    return directionPairings[Math.floor(Math.random() * directionPairings.length)]
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

  public static getSuperlative(yDiff: number) {
    if (yDiff <= 10) {
      return Superlative.Perfect
    }
    if (yDiff <= 15) {
      return Superlative.Great
    }
    if (yDiff <= 25) {
      return Superlative.Good
    }
  }
}
