import { winners } from "../types"
import './Square.css'

interface Props{
    children: winners
    updateBoard?: (index: number) => void
    index?: number
}

export function Square({ children, updateBoard, index }: Props) {

    const handleClick = () => {
        if (!updateBoard || index === undefined) return
        updateBoard(index)
    }

    return(
        <div onClick={handleClick} className="square-cell">
            <span className="cell-text"> { children } </span>
        </div>
    )
}