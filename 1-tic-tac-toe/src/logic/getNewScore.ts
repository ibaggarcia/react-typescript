import { turnSymbols } from "../types"
import { TURNS } from "./constants"

export const getNewScore = (winner: turnSymbols, score: number[]): number[] => {
    const newScore = [...score]
    if (winner === TURNS.X) newScore[0] = newScore[0] + 1
    else newScore[1] = newScore[1] + 1

    return newScore
  }