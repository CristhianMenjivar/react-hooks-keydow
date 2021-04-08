import {useEffect} from 'react'
interface useKeyDownEventParams {
  callback: (key: string) => void // arrow function
  keys: string[]
}

const useKeyDownEvent = ({ callback, keys=[] }: useKeyDownEventParams) => {
  
  const validateKeys = (key: string) => {
    if (keys?.length > 0) {
      callback(key)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', (event)=> validateKeys(event.key))
    return () => window.removeEventListener('keydown',(event)=> validateKeys(event.key))
  }, [])
}

export default useKeyDownEvent
