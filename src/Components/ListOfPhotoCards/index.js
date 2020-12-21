import React from 'react'
import { PhotoCard } from '@components/PhotoCard'
import { gql, useQuery } from '@apollo/client';

export const ListOfPhotoCards = () => {
  const categories = gql`
    query GetCategories {
        photos{
        id
        categoryId
        src
        likes
        liked
      }
    }
  `
  const { loading, error, data } = useQuery(categories)
  if (loading) return <center> <h1>Loader...</h1> </center>
  if (error) return <center><h1>Ha ocurrido algun error, intenta más tarde</h1></center>
  return (
    <ul>
      {
        data.photos.map(item => <PhotoCard key={item.id} {...item} />)
      }
    </ul>
  )
}