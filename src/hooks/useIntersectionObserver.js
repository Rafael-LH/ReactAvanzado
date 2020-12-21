import { useState, useRef, useEffect } from 'react'

export const useIntersectionObserver = () => {
  const DOMRef = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Hacemos lo siguiente porque siempre queremos retornar una promesa
    Promise.resolve( // y de esta manera siempre retornamos una promesa
      // validamos si nuestro browser contiene por defecto IntersectionObserver
      // o tenemos que utilizar un Polyfill que es intersection-observer
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
      // si no lo soparta con un dinamic import traemos a nuestro PolyFill de intersection-observer
    ).then((IntersectionObserver) => {
      const observer = new IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect() // lo que hacemos es desconectar el observador para que deje de observar
        }
      })
      observer.observe(DOMRef.current)
    }, [DOMRef])
  })

  return { show, DOMRef }
}