import Game from '~/scenes/Game'
import { Constants } from '~/util/Constants'
import { Arrow } from './Arrow'

export class Spawner {
  private game: Game
  private static SPAWN_POSITIONS = {
    left: { x: 50, y: Constants.GAME_HEIGHT },
    up: { x: 110, y: Constants.GAME_HEIGHT },
    down: { x: 170, y: Constants.GAME_HEIGHT },
    right: { x: 230, y: Constants.GAME_HEIGHT },
  }

  constructor(game: Game) {
    this.game = game

    this.game.time.addEvent({
      callback: () => {
        const randDirection = Constants.getRandomDirection()
        const newArrow = new Arrow(this.game, {
          position: Spawner.SPAWN_POSITIONS[randDirection],
          direction: randDirection,
        })
        newArrow.setVelocity(0, -50)
      },
      delay: 1000,
      repeat: -1,
    })
  }
}
