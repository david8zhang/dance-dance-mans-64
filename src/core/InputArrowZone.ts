import { Constants, Direction } from '~/util/Constants'
import Game from '../scenes/Game'
import { InputArrow } from './InputArrow'

export class InputArrowZone {
  private game: Game
  public arrows: any

  constructor(game: Game) {
    this.game = game
    this.createArrows()
    this.setupKeyboardListeners()
  }

  public createArrows() {
    let xPos = 50
    this.arrows = {}
    const directions = [Direction.LEFT, Direction.UP, Direction.DOWN, Direction.RIGHT]
    directions.forEach((dir) => {
      const config = {
        position: {
          x: xPos,
          y: 40,
        },
        direction: dir,
      }
      xPos += 60
      this.arrows[dir] = new InputArrow(this.game, config)
    })
  }

  setupKeyboardListeners() {
    let direction: Direction
    this.game.input.keyboard.on('keydown', (event) => {
      switch (event.code) {
        case 'ArrowUp': {
          direction = Direction.UP
          break
        }
        case 'ArrowDown': {
          direction = Direction.DOWN
          break
        }
        case 'ArrowLeft': {
          direction = Direction.LEFT
          break
        }
        case 'ArrowRight': {
          direction = Direction.RIGHT
          break
        }
      }
      const inputArrow = this.arrows[direction]
      if (inputArrow) {
        inputArrow.highlight()
        inputArrow.removeOverlappingArrow()
      }
    })

    this.game.input.keyboard.on('keyup', (event) => {
      switch (event.code) {
        case 'ArrowUp': {
          direction = Direction.UP
          break
        }
        case 'ArrowDown': {
          direction = Direction.DOWN
          break
        }
        case 'ArrowLeft': {
          direction = Direction.LEFT
          break
        }
        case 'ArrowRight': {
          direction = Direction.RIGHT
          break
        }
      }
      const inputArrow = this.arrows[direction]
      if (inputArrow) {
        inputArrow.dehighlight()
      }
    })
  }
}
