import React from 'react'
import { Link, Grid, Image } from './styles'
import propType from 'prop-types'

export const ListOfFavs = ({ favs = [] }) => (
  <Grid>
    {
      favs.map(fav => (
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image src={fav.src} alt={fav.id} />
        </Link>

      ))
    }
  </Grid>
)
ListOfFavs.propType = {
  favs: propType.arrayOf(
    propType.shape({  // le indico que tengo que recibir un array de objetos
      id: propType.string,
      src: propType.string
    })
  )
}