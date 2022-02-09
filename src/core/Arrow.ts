import Game from '~/scenes/Game'
import { Direction } from '~/util/Constants'

export class Arrow {
  public game: Game
  public direction: Direction

  constructor(game: Game, direction: Direction) {
    this.game = game
    this.direction = direction
  }
}
