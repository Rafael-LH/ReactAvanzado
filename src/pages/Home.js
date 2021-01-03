import React from 'react'
import { ListOfCategories } from '@components/ListOfCategories'
import { ListOfPhotoCards } from '../Container/ListOfPhotoCards'
import { LayoutHelmet } from '@components/LayoutHelmet'

export const Home = ({ id }) => (
  <>
    <LayoutHelmet
      title='Tu app de fotos de mascotas'
      subtitle='Con petgram, puedes encontrar fotos de animales domésticos muy bonitos'
    />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </>
)