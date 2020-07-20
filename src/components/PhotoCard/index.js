import React, { useEffect, useState, useRef } from 'react'
import { Article, ImgWrapper, Img, Button } from './style'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [showFadeIn, setShowFadeIn] = useState(false);
  const [show, setShow] = useState(false);
  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try {
      const like = JSON.parse(window.localStorage.getItem(key))
      return like
    } catch (err) {
      return false
    }
  });
  const element = useRef(null);

  useEffect(() => {
    const onFadeIn = (_) => {
      const isFadeIn = window.scrollY > 200;
      (showFadeIn !== isFadeIn) && setShowFadeIn(isFadeIn)
    }
    document.addEventListener('scroll', onFadeIn);
    return () => document.removeEventListener('scroll', onFadeIn)
  }, [showFadeIn])

  useEffect(() => {
    useNearScreen(element, setShow)
  }, [element])

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const setLocalStorage = (value) => {
    // try catch por si nuestro navegador no lo soporta o los navegadores que tengan la navegacion privada quiza no pueda acceder
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Article ref={element} >
      {
        show && (
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt='Image' showFadeIn={showFadeIn} />
              </ImgWrapper>
            </a>
            <Button onClick={() => setLocalStorage(!liked)}>
              <Icon size='32px' /> {likes} Likes!
            </Button>
          </>
        )
      }
    </Article>
  )
}
