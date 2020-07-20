import React, { useEffect, useState, useRef } from 'react'
import { Article, ImgWrapper, Img, Button } from './style'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [showFadeIn, setShowFadeIn] = useState(false);
  const [show, setShow] = useState(false);
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
    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true)
        // desconectamos el observador porque solo lo queremos escuchar una vez
        observer.disconnect();
      }
    })
    observer.observe(element.current)
  }, [element]) // dependencia de nuestr efecto

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
            <Button>
              <MdFavoriteBorder size='32px' /> {likes} Likes!
            </Button>
          </>
        )
      }
    </Article>
  )
}
