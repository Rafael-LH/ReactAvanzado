import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const Home = ({ categoryId }) => (
  <Layout title="Tu app de fotos de mascotas" subtitle="Con petgram peudes encontrar fotos de animales domesticos muy bonitos">
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </Layout>
)