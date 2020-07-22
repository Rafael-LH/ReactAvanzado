import React, { useEffect, useState, useRef } from 'react'
import { Article, ImgWrapper, Img, Button } from './style'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [showFadeIn, setShowFadeIn] = useState(false);
  const [show, element] = useNearScreen();
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  

  useEffect(() => {
    const onFadeIn = (_) => {
      const isFadeIn = window.scrollY > 200;
      (showFadeIn !== isFadeIn) && setShowFadeIn(isFadeIn)
    }
    document.addEventListener('scroll', onFadeIn);
    return () => document.removeEventListener('scroll', onFadeIn)
  }, [showFadeIn])

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={element} >
      {
        show && (
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} alt='Image' showFadeIn={showFadeIn} />
              </ImgWrapper>
            </a>
            <Button onClick={() => setLiked(!liked)}>
              <Icon size='32px' /> {likes} Likes!
            </Button>
          </>
        )
      }
    </Article>
  )
}
