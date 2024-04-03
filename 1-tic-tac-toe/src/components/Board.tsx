import { board, turnSymbols } from "../types"
import { Square } from "./Square"

interface Props{
    score: number[]
    board: board
    turn: turnSymbols
    updateBoard: (index: number) => void
}

export function Board({ score, board, turn, updateBoard }: Props) {
    return(
        <>
            <header>
                <h1>3 en Raya!</h1>
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
        </>
    )
}