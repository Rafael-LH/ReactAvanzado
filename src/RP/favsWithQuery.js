import React from 'react'
import { useQuery } from '@apollo/client'
import { getFavorites } from '@gql/getFavorites'
import { Spinner } from '@components/Spinner'
import { InternalError } from '@components/Error/500'

export const favsWithQuery = (Component) => {
  const NewComponent = () => {
    const { loading, error, data: { favs } = [] } = useQuery(getFavorites, {
      /**
       * Lo que hacemos a continuacion no es tan buena practica pero como no es 
       * algo tan importante lo podemos hacer, basicamente lo que quiere dercir 
       * la siguiente linea de codigo es que siempre mire a la network cada vez
       * que se ejecuta esta query de tal manera ya no nos quedara en cache las 
       * imagenes que habiamos hecho like y ahora si hacemos like a otra imagen
       * ya nos mostrara en favoritos la imagen que le hemos dado like sin necesidad
       * de refresacar la pagina
       */
      fetchPolicy: 'network-only'
    })
    if (loading) return <Spinner />
    if (error) return <InternalError />
    return <Component favs={favs} />
  }
  return NewComponent
} 