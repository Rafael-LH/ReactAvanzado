import React from 'react'
import { Link, Image } from './style'

export const Category = ({ cover, path = '#', emoji }) => (
  <Link to={path}>
    <Image src={cover} alt={cover} />
    {emoji}
  </Link>
)
