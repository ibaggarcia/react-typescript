import { board } from "../types"
import { TURNS, WINNER_COMBOS } from "./constants"

export const checkWinner = (boardToCheck: board): boolean => {

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