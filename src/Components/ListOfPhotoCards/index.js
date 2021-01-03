import React from 'react'
import { PhotoCard } from '@components/PhotoCard'
import { Ul } from './styles'

export const ListOfPhotoCardsComponent = ({ photos }) => {
  return (
    <Ul>
      {
        photos.map(item => <PhotoCard key={item.id} {...item} />)
      }
    </Ul>
  )
}

