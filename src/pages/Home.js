import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomeComponent = ({ categoryId }) => (
  <Layout title="Tu app de fotos de mascotas" subtitle="Con petgram peudes encontrar fotos de animales domesticos muy bonitos">
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </Layout>
)
// Con react memo lo que hacemos es evitar re renderizados si las props que recibe el componente no son distintas
export const Home = React.memo(HomeComponent, (prevProps, props) => {
  // agrego un funcion la cual por defecto recibe las anteriores props  y las actuales
  // para indicarle a react memo que tendra que recordar en caso de que el categoryId de las props anteriores es igual
  // al categoryId de las props que me estan llegando
  return prevProps.categoryId === props.categoryId
})