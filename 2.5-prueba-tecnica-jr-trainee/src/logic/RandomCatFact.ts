import { RANDOM_CAT_FACT_URL } from "./api_urls"

interface RandomCatFact {
  fact: string
  length: number
}

export const getRandomCatFact = async (): Promise<string | void> => {
    try{
      const res: Response = await fetch(RANDOM_CAT_FACT_URL)
      const data: RandomCatFact = await res?.json()
      
      return data?.fact
    }catch(e) {
      return undefined
    }
  }