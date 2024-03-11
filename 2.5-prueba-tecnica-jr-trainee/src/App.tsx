
import { useEffect, useState } from 'react'
import './App.css'

const RANDOM_CAT_FACT_URL = 'https://catfact.ninja/fact'
const RANDOM_IMAGE_URL = 'https://cataas.com/says/hello'

interface RandomCatFact {
  fact: string
  length: number
}

function App() {

  const [catFact, setCatFact] = useState<string>('un random fact')

  const getRandomCatFact = async (): Promise<string> => {
    const res: Response = await fetch(RANDOM_CAT_FACT_URL)
    const data: RandomCatFact = await res.json()

    return data?.fact
  }

  useEffect(() => {
    getRandomCatFact().then(
      res => {
        const newCatFact: string = res
        const firstWord: string = newCatFact.split(' ').slice(0, 1).toString()
        setCatFact(firstWord)
      }
    )
  }, [])

  return (
    <main>
      <section>
        <h2>{ catFact }</h2>
      </section>
      <section>
        <img src={RANDOM_IMAGE_URL} alt="a random cat fact" />
      </section>
    </main>
  )
}

export default App
