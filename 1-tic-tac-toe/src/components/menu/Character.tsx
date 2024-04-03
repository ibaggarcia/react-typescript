import './Character.css'
import { character } from "../../types"

interface Props{
    children: character
    updateCharacter: (character: character) => void
}

export function Character({ children, updateCharacter }: Props ){

    const handleClick = () => {
        updateCharacter(children)
    }

    return(
        <div className="character" onClick={handleClick}>
            { children }
        </div>
    )
}