import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const query = gql`
  query getSinglePhoto($id: ID!){
    photo(id: $id){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {
      /* la destructuraciond de data contiene una key photo la cual inicializaremos en [] y el objeto de data lo inicializaremos en {} */
      ({ loading, error, data: { photo = [] } = {} }) => {
        /**
         * de la siguiente manera podriamos quitar la destructuracion de data para hacerlo como esta abajo
         * hago una validacion de loadign distinto a true porque graphql de inicio la variable de loading estara en true 
         * ya que estara cargando la información una vez que esta información ha sido cargada loading cambiara a false
         */
        /* const { photo = {} } = (!loading) && data */
        return !loading && <PhotoCard {...photo} />
      }
    }
  </Query>
)