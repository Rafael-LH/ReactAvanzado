import React from 'react'
import { Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export const FavButton = ({ liked, likes, handleFavClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Button onClick={handleFavClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}