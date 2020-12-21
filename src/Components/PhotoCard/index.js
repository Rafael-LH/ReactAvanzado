import React, { useRef } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { useLocalStorage } from "@hooks/useLocalStorage";

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const articleRef = useRef(null)
  const { show } = useIntersectionObserver(articleRef)
  const [liked, setLiked] = useLocalStorage(`like-${id}`, likes)
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={articleRef}>
      {
        show &&
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="image" />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' /> {likes} likes!
          </Button>
        </>
      }
    </Article>
  )
}