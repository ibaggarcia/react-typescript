export type cellBoard = character | null

export type winners = character | null | '='

export type board = [
  cellBoard, cellBoard, cellBoard,
  cellBoard, cellBoard, cellBoard,
  cellBoard, cellBoard, cellBoard
]

type turnSymbols = character | null

export interface Turns {
  X: character | null
  O: character | null
}

type winCombo = [number, number, number]

type character = '😀' | '😃' | '😄' | '😁' | '😆' | '😅' | '🤣'
  | '😂' | '🙂' | '🙃' | '🫠' | '😉' | '😊' | '😇' | '😈' | '🤬' 
  | '🤠' | '🫥' | '😶‍🌫️' | '😷' | '🤢' | '🤯' | '🥳' | '🥸' | '😵‍💫'
  | '🤧' | '🤮' | '🤥' | '🥶' | '😎' | '💀' | '☠️' | '💩' | '🤡'
  | '👹' | '👺' | '👻' | '👽' | '👾' | '🤖' | '🪯' | '♈' | '♉'