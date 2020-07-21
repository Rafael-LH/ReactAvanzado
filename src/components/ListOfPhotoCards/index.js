import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhotos = graphql(gql`
  query getPhotos{
    photos {
      id,
      categoryId,
      src,
      likes,
      userId,
      liked
    }
  }
`)

/**
 * Lo que estamos haciendo aqui es recibir por props el resultado de la query con graphql el cual es un objeto que tine la key data
 * dentro de el tiene photos que lo iniciaremos en un array vacío que por defecto todo sera un objeto vacío
 */
const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  // console.log(photos)
  return (
    <ul>
      {
        photos.map(item => <PhotoCard key={item.id} {...item} />)
      }
    </ul>
  )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)