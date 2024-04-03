import { Turns, winCombo } from "../types"

export const TURNS: Turns = {
    X: null,
    O: null
  }
  
export const WINNER_COMBOS: winCombo[] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]