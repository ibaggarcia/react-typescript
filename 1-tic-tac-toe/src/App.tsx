import './App.css'
import { Board } from './components/Board'
import { WinnerModal } from './components/WinnerModal'
import { Menu } from './components/menu/Menu'
import { useBoard } from './hooks/useBoard'

function App() {

  const { board, score, turn, winner, player, updateBoard, restartGame, newGame, updateCharacter } = useBoard()

  return (
    <>
      <Board score={score} board={board} turn={turn} updateBoard={updateBoard}/>
      { winner && (
        <WinnerModal winner={winner} restartGame={restartGame} newGame={newGame} />
      )}
      <Menu player={player} updateCharacter={updateCharacter}/>
    </>
  )
}

export default App
