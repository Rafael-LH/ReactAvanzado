import React from 'react'
import { ListOfCategories } from '@components/ListOfCategories'
import { ListOfPhotoCards } from '../Container/ListOfPhotoCards'
import { LayoutHelmet } from '@components/LayoutHelmet'

const HomePage = ({ id }) => (
  <>
    <LayoutHelmet
      title='Tu app de fotos de mascotas'
      subtitle='Con petgram, puedes encontrar fotos de animales domésticos muy bonitos'
    />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </>
)
/**
 * Si la id actual es la misma que la id anterior lo que hace es evitar
 * otra vez el renderizado y de esta manera mejoramos la performance de nuestra app
 * pero debemos de tener cuidado porque si validamos un valor que por ejemplo
 * sea siempre undefined o false un valor nulo por algun error que no estamos
 * pasando bien las props pues esto provocara que nunca se renderiza nuestro
 * componente Home
 */
const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
export default Home
