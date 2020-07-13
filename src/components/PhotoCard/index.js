import React from 'react'
import { ElemmentArticle, ImgWrapper, Img, Button } from './style'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <ElemmentArticle>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt='Image' />
        </ImgWrapper>
      </a>

      <Button>
        <MdFavoriteBorder size='32px' /> {likes} Likes!
      </Button>
    </ElemmentArticle>
  )
}
