export enum Direction {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

export class Constants {
  public static GAME_WIDTH = 800
  public static GAME_HEIGHT = 600

  public static getRandomDirection() {
    const randomNum = Math.floor(Math.random() * 4)
    const directions = [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT]
    return directions[randomNum]
  }
}
