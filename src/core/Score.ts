import Game from '~/scenes/Game'
import { Constants, Rank, Superlative } from '~/util/Constants'

export class Score {
  private game: Game
  public scoreText: Phaser.GameObjects.Text
  public score: number = 0
  public static PADDING = 10
  public totalNotes: number = 0
  public didFinish: boolean = false

  constructor(game: Game) {
    this.game = game
    this.scoreText = this.game.add.text(0, 0, `Score: ${this.score.toString()}`, {
      fontSize: '20px',
      fontFamily: 'Graffiti',
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

  public getRank() {
    const maxPossibleScore = (this.totalNotes *= Constants.SUPERLATIVE_SCORE[Superlative.Perfect])
    const percentageScore = Math.round((this.score / maxPossibleScore) * 100)
    if (percentageScore >= 95) {
      return Rank.S
    } else if (percentageScore >= 90) {
      return Rank.A
    } else if (percentageScore >= 80) {
      return Rank.B
    } else if (percentageScore >= 70) {
      return Rank.C
    } else if (percentageScore >= 60) {
      return Rank.D
    } else if (percentageScore >= 50) {
      return Rank.F
    }
  }
}
