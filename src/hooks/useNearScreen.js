import { useEffect, useState, useRef } from 'react'

export function useNearScreen() {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // lo utilizo para retornar siempre una promesa
    Promise.resolve(
      // validacion para ver si nuestro navegador es compatible con intersection observer de no ser asi utilizo el polyfill
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        // este es un import dinamico ya que solo lo quiero cuando este utilizando el hook
        : import('intersection-observer') // nos retorna una promesa, y este es el polyfill en caso de que nuestro navegador no sea compatible con la API
    )
      .then(() => {
        const observer = new IntersectionObserver((entries) => {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setShow(true);
            // desconectamos el observador porque solo lo queremos escuchar una vez
            observer.disconnect();
          }
        })
        observer.observe(element.current)
      })
  }, [element])

  return [show, element]
}