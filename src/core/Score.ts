import Game from '~/scenes/Game'
import { Constants } from '~/util/Constants'

export class Score {
  private game: Game
  public scoreText: Phaser.GameObjects.Text
  public score: number = 0
  public static PADDING = 10

  constructor(game: Game) {
    this.game = game
    this.scoreText = this.game.add.text(0, 0, `Score: ${this.score.toString()}`, {
      fontSize: '20px',
    })
    this.scoreText.setPosition(
      Score.PADDING * 2,
      this.game.healthBar.position.y - (this.scoreText.height + Score.PADDING)
    )
  }

  public addScore(amount: number) {
    this.score += amount
    this.scoreText.setText(`Score: ${this.score.toString()}`)
  }
}
