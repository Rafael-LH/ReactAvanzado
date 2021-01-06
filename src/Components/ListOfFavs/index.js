import React from 'react'
import { Link, Image, Grid } from './styles'
import PropTypes from 'prop-types'

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
ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string
    })
  )
}