import React from 'react'
import { useQuery } from '@apollo/client'
import { getPhotos } from '../gql/getPhotos'
import { Spinner } from '../Components/Spinner'

export const listOfPhotoCardsRP = (ListOfPhotoCards) => {
  const ListOfPhotoCardsNewComponent = ({ categoryId }) => {
    const { loading, error, data: { photos } = [] } = useQuery(getPhotos, {
      variables: {
        categoryId: categoryId
      }
    })
    if (loading) return <Spinner />
    if (error) return <center><h1>Ha ocurrido algun error, intenta más tarde</h1></center>
    return <ListOfPhotoCards photos={photos} />
  }
  return ListOfPhotoCardsNewComponent
}
