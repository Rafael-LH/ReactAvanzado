import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      // hacemos un parceo porque el localstorage guarda el valor en un string y nosotros queremos un entero
      const item = JSON.parse(window.localStorage.getItem(key))
      return item || initialValue
    } catch (err) {
      return initialValue
    }
  });
  const setLocalStorage = (value) => {
    // try catch por si nuestro navegador no lo soporta o los navegadores que tengan la navegacion privada quiza no pueda acceder
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (err) {
      console.error(err);
    }
  }

  return [storedValue, setLocalStorage]
}