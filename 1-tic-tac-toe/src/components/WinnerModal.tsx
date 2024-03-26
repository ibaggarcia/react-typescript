import './WinnerModal.css'
import { winners } from '../types'
import { Square } from './Square'

interface Props{
    winner: winners
    restartGame: () => void
    newGame: () => void
}

export function WinnerModal({ winner, restartGame, newGame }: Props) {

    return (
        <div className="modal-container">
            <div className='winner-modal'>
                <WhoWon winner={winner}/>
                <Square children={winner}></Square>
                <div className='buttons'>
                    <button onClick={newGame}>Nueva partida</button>
                    <button onClick={restartGame}>Reiniciar marcador</button>
                </div>
            </div>
        </div>
    )
}

const WhoWon = ({ winner }: { winner: winners }) => {
    if (winner === '=') {
        return(
            <h2 className='modal-title'>{`Ha habido un empate!`}</h2>
        )
    } else {
        return(
            <h2 className='modal-title'>{`El ganador fue ${winner}`}</h2>
        )
    }
}