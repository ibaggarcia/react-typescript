import { useEffect, useState } from "react"
import { CatImageUrl } from "../types"
import { RANDOM_IMAGE_URL } from "../logic/api_urls"

export function useCatImageUrl({ catFact }: { catFact: string }): CatImageUrl {
    const [imageUrl, setImageUrl] = useState<string>('')
  
    useEffect(() => {
      const firstWord = catFact?.split(' ', 1).toString()
      const url = `${RANDOM_IMAGE_URL}${firstWord}`
      setImageUrl(url)
    }, [catFact])
  
    const setCatImageUrl = (url: string): void => {
      setImageUrl(url)
    }
  
    return { imageUrl, setCatImageUrl }
  }