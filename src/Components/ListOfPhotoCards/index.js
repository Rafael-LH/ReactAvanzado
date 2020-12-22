import React from 'react'
import { PhotoCard } from '@components/PhotoCard'

export const ListOfPhotoCardsComponent = ({ photos }) => {
  return (
    <ul>
      {
        photos.map(item => <PhotoCard key={item.id} {...item} />)
      }
    </ul>
  )
}

