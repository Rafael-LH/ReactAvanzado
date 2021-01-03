import React from 'react'
import { FavsWithQuery } from '@container/FavsWithQuery'
import { LayoutHelmet } from '@components/LayoutHelmet'

export const Favs = () => (
  <>
    <LayoutHelmet
      title='Tus favoritos'
      subtitle='Aquí puedes encontrar tus favoritos'
    />
    <FavsWithQuery />
  </>
)