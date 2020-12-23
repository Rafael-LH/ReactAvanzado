import React from 'react'
import { useQuery } from '@apollo/client';
import { withPhotos } from '../gql/whitPhotos'

export const listOfPhotoCardsRP = (ListOfPhotoCards) => {
  const ListOfPhotoCardsNewComponent = ({ categoryId }) => {
    const { loading, error, data: { photos } = [] } = useQuery(withPhotos, {
      variables: {
        categoryId: categoryId
      }
    })
    if (loading) return <center> <h1>Cargando...</h1> </center>
    if (error) return <center><h1>Ha ocurrido algun error, intenta más tarde</h1></center>
    return <ListOfPhotoCards photos={photos} />
  }
  return ListOfPhotoCardsNewComponent
}