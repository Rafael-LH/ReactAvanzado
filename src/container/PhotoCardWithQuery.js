import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { Query } from 'react-apollo' // React Apollo es un cliente que nos va a permitir conectarnos a un servidor GraphQL
import { queryPhoto } from '../hoc/getSinglePhoto'
import { LoaderSpinner } from '../components/LoaderSpinner'

/* la destructuracion de data contiene una key photo la cual inicializaremos en [] y el objeto de data lo inicializaremos en {} */
const renderProp = ({ loading, error, data: { photo = [] } = {} }) => {
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
export const PhotoCardWithQuery = ({ id }) => (
  <Query query={queryPhoto} variables={{ id }}>
    {renderProp}
  </Query>
)