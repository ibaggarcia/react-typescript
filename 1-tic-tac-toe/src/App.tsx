import { useState } from 'react'
import './App.css'
import { Turns, board, turnSymbols, winCombo, winners } from './types'
import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'

const TURNS: Turns = {
  X: 'X',
  O: 'O'
}

const WINNER_COMBOS: winCombo[] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {

  const [turn, setTurn] = useState<turnSymbols>(TURNS.X)
  const [board, setBoard] = useState<board>([null, null, null, null, null, null, null, null, null])
  const [winner, setWinner] = useState<winners>(null)
  const [score, setScore] = useState<number[]>([0, 0])

  const newGame = (): void => {
    setBoard([null, null, null, null, null, null, null, null, null])
    setWinner(null)
  }

  const restartGame = (): void => {
    newGame()
    setScore([0, 0])
    setTurn(TURNS.X)
  }

  const updateBoard = (index: number) => {
    if (board[index]) return

    const newTurn: turnSymbols = turn === TURNS.X ? TURNS.O : TURNS.X
    const newBoard: board = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const isItWinner: boolean = checkWinner(newBoard)

    if (isItWinner === true) {
      const newWinner = turn
      setWinner(newWinner)
      changeScore(newWinner)
    }

    const isItDraw: boolean = newBoard.every(cell => cell === TURNS.X || cell === TURNS.O) 
    if (isItDraw === true) setWinner('=')
    
    setTurn(newTurn)
  }

  const checkWinner = (boardToCheck: board): boolean => {

    let winner: boolean = false

    WINNER_COMBOS.map(winner_combo => {
      if (boardToCheck[winner_combo[0]] === TURNS.X) {
        if (boardToCheck[winner_combo[1]] === TURNS.X) {
          if (boardToCheck[winner_combo[2]] === TURNS.X) winner = true
        }
      } else if (boardToCheck[winner_combo[0]] === TURNS.O) {
        if (boardToCheck[winner_combo[1]] === TURNS.O) {
          if (boardToCheck[winner_combo[2]] === TURNS.O) winner = true
        }
      }
    })

    return winner
  }

  const changeScore = (winner: turnSymbols): void => {
    const newScore = [...score]
    if (winner === 'X') newScore[1] = newScore[1] + 1
    else newScore[0] = newScore[0] + 1

    setScore(newScore)
  }

  return (
    <>
      <header>
        <h1>Tic-Tac-Toe!</h1>
        <span>{`${score[0]} - ${score[1]}`}</span>
      </header>
      {
        board && (
          <main>
            {
              board.map((_, index) => (
                <Square key={index}
                  children={board[index]}
                  updateBoard={updateBoard}
                  index={index} />
              ))
            }
          </main>
        )
      }
      <footer>
        <h3>Turno</h3>
        <Square children={turn} />
      </footer>
      {winner && (
        <WinnerModal winner={winner} restartGame={restartGame} newGame={newGame} />
      )}
    </>
  )
}

export default App
