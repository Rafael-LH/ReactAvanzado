import React from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { useLocalStorage } from "@hooks/useLocalStorage";

export const PhotoCard = ({ id, likes, src }) => {
  const { show, DOMRef } = useIntersectionObserver()
  const [liked, setLiked] = useLocalStorage(`like-${id}`, likes)
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={DOMRef}>
      {
        show &&
        <>
          <a href={`/?detail=${id}`}>
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