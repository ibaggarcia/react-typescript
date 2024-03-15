import { useEffect, useState } from "react"
import { getRandomCatFact } from "../logic/RandomCatFact"
import { CatFact } from "../types"
  
export function useCatFact(): CatFact {
    
    const [catFact, setCatFact] = useState<string>('un random fact')
    
    useEffect(() => {
      getRandomCatFact().then(res => setRandomCatFact(res))
    }, [])
  
    const setRandomCatFact = (res: string | void): void => {
      const newCatFact: string = res ?? 'un dato random sobre los gatos'
      setCatFact(newCatFact)
    }
  
    return { catFact, setRandomCatFact }
  }