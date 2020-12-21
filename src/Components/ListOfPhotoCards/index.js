import React from 'react'
import { PhotoCard } from '@components/PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        [1, 2, 3, 4, 5].map(item => <PhotoCard key={item} id={item} />)
      }
    </ul>
  )
}