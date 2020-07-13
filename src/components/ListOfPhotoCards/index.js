import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        [1, 2, 3].map(item => <PhotoCard key={item} />)
      }
    </ul>
  )
}
