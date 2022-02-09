import { Direction } from '~/util/Constants'
import Game from '../scenes/Game'
import { InputArrow } from './InputArrow'

export class InputArrowZone {
  private game: Game
  public arrows: InputArrow[] = []

  constructor(game: Game) {
    this.game = game
    this.createArrows()
  }

  public createArrows() {
    let xPos = 50
    const directions = [Direction.LEFT, Direction.UP, Direction.DOWN, Direction.RIGHT]
    directions.forEach((dir) => {
      const config = {
        position: {
          x: xPos,
          y: 40,
        },
        direction: dir,
      }
      xPos += 75
      this.arrows.push(new InputArrow(this.game, config))
    })
  }
}
