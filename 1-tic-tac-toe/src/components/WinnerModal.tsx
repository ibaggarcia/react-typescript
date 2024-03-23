import './WinnerModal.css'
import { turnSymbols } from '../types'
import { Square } from './Square'

interface Props{
    winner: turnSymbols
}

export function WinnerModal({ winner }: Props) {
    return (
        <div className="modal-container">
            <div className='winner-modal'>
                <h2 className='modal-title'>{`El ganador fue ${winner}`}</h2>
                <Square children={winner}></Square>
                <div className='buttons'>
                    <button>Nueva partida</button>
                    <button>Reiniciar marcador</button>
                </div>
            </div>
        </div>
    )
}