import './Menu.css'
import { characters } from "../../logic/characters";
import { Character } from "./Character";
import { character } from '../../types';

interface Props{
    player: number
    updateCharacter: (character: character) => void
}

export function Menu({ player, updateCharacter }: Props){

    const menuHide: string = player === 3 ? 'menu-hide' : ''

    return(
        <section className={`menu ${menuHide}`}>
            <h2 className='menu-title'>Selecciona un personaje {player}</h2>
            <div className='selector'>
                {
                    characters.map(character => (
                        <Character key={character} children={character} updateCharacter={updateCharacter}/>
                    ))
                }
            </div>
        </section>
    )
}