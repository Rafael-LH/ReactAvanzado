import React from 'react'
import { Anchor, Image } from './style'

const DEFAUL_IMAGE = 'https://imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover, path, emoji }) => (
  <Anchor href={path}>
    <Image src={cover} alt={cover} />
    {emoji}
  </Anchor>
)
