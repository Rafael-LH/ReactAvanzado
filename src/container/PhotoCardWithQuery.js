import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { Query } from 'react-apollo'
import { queryPhoto } from '../hoc/getSinglePhoto'
import { LoaderSpinner } from '../components/LoaderSpinner'

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={queryPhoto} variables={{ id }}>
    {
      /* la destructuraciond de data contiene una key photo la cual inicializaremos en [] y el objeto de data lo inicializaremos en {} */
      ({ loading, error, data: { photo = [] } = {} }) => {
        /**
         * de la siguiente manera podriamos quitar la destructuracion de data para hacerlo como esta abajo
         * hago una validacion de loadign distinto a true porque graphql de inicio la variable de loading estara en true 
         * ya que estara cargando la información una vez que esta información ha sido cargada loading cambiara a false
         */
        /* const { photo = {} } = (!loading) && data */
        if (loading) return <LoaderSpinner />
        if (error) return <p>Error...</p>
        return <PhotoCard {...photo} />
      }
    }
  </Query>
)