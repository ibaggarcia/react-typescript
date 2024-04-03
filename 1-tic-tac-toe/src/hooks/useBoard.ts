import { useState } from "react"
import { turnSymbols, board, winners } from "../types"
import { TURNS } from "../logic/constants"
import { checkWinner } from "../logic/checkWinner"
import { getNewScore } from "../logic/getNewScore"
import { character } from "../types"
import confetti, { Shape } from 'canvas-confetti'

export function useBoard() {
    const [turn, setTurn] = useState<turnSymbols>(null)
    const [board, setBoard] = useState<board>([null, null, null, null, null, null, null, null, null])
    const [winner, setWinner] = useState<winners>(null)
    const [score, setScore] = useState<number[]>([0, 0])
    const [player, setPlayer] = useState<number>(1)
  
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
        const scalar = 4
        const winCharacter = confetti.shapeFromText({ text: turn ?? '🥳', scalar})
        confetti({
          particleCount: 200,
          spread: 180,
          shapes: [winCharacter],
          scalar
        })
        const newScore = getNewScore(newWinner, [...score])
        setScore(newScore)
      }
  
      const isItDraw: boolean = newBoard.every(cell => cell === TURNS.X || cell === TURNS.O) 
      if (isItDraw === true) setWinner('=')
      
      setTurn(newTurn)
    }

    const updateCharacter = (character: character): void => {
        if (player === 1) TURNS.X = character
        else TURNS.O = character

        const newPlayer = player + 1
        setPlayer(newPlayer)
        setTurn(TURNS.X)
    }
  
    return { board, score, turn, winner, player, updateBoard, restartGame, newGame, updateCharacter }
  }