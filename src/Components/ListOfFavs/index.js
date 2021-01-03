import React from 'react'
import { Link, Image, Grid } from './styles'

export const ListOfFavs = ({ favs }) => {
  return (
    <Grid>
      {
        favs.map(item => (
          <Link to={`/detail/${item.id}`} key={item.id}>
            <Image src={item.src} alt={item.id} />
          </Link>
        ))
      }
    </Grid>
  )
}