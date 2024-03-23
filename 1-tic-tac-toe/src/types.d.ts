export type cellBoard = 'X' | 'O' | null

export type board = [
  cellBoard, cellBoard, cellBoard,
  cellBoard, cellBoard, cellBoard,
  cellBoard, cellBoard, cellBoard
]

type turnSymbols = 'X' | 'O'

export interface Turns {
  X: 'X'
  O: 'O'
}

type winCombo = [number, number, number]