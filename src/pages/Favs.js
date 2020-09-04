import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

const Favs = () => (
  <>
    <Layout title="Petgram - tus favoritos" subtitle="Aquí puedes encontrar tus favoritos">
      <FavsWithQuery />
    </Layout>
  </>
)
export default Favs
