import './App.css'
import { getRandomCatFact } from './logic/RandomCatFact'
import { useCatFact } from './hooks/useCatFact'
import { useCatImageUrl } from './hooks/useCatImageUrl'
import { CatFact, CatImageUrl } from './types'

const ERROR_IMAGE = 'https://img.freepik.com/vector-gratis/advertencia-red-internet-404-error-pagina-o-archivo-no-encontrado-pagina-web-pagina-error-internet-o-problema-no-encontrado-red-error-404-presente-hombre-durmiendo-pantalla_1150-55450.jpg'

function App() {

  const { catFact, setRandomCatFact }: CatFact = useCatFact()
  const { imageUrl, setCatImageUrl }: CatImageUrl = useCatImageUrl({ catFact })

  const handleClick = () => {
    getRandomCatFact().then(res => setRandomCatFact(res))
  }

  const handleError = () => {
    setCatImageUrl(ERROR_IMAGE)
  }

  return (
    <main>
      <section>
        <h2>{ catFact }</h2>
      </section>
      <section>
        <img src={imageUrl} onError={handleError} alt="a random cat fact" />
      </section>
      <footer>
        <button onClick={handleClick}>Nuevo fact</button>
      </footer>
    </main>
  )
}

export default App
