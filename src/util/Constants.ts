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
  public static INITIAL_DELAY = 5700

  public static getRandomDirection() {
    const randomNum = Math.floor(Math.random() * 4)
    const directions = [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT]
    return directions[randomNum]
  }

  public static SONG_CONFIGS = [
    {
      name: 'this-way-demo',
      bpm: 152,
    },
    {
      name: 'way-in-my-brain',
      bpm: 134,
    },
    {
      name: 'funny-thing',
      bpm: 70,
      initialDelayDiff: -60,
    },
  ]
}
