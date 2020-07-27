import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router'
import { Article, ImgWrapper, Img } from './style'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

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

  return (
    <Article ref={element} >
      {
        show && (
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt='Image' showFadeIn={showFadeIn} />
              </ImgWrapper>
            </Link>
            <ToggleLikeMutation>
              {/* Las render props necesitan de una funcion que le diga lo que tiene que renderizar */}
              {
                (togglelike) => {
                  const handleFavClick = () => {
                    (!liked) && togglelike({
                      variables: {
                        input: {
                          id
                        }
                      }
                    })
                    setLiked(!liked)
                  }
                  return (
                    <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                  )
                }
              }
            </ToggleLikeMutation>
          </>
        )
      }
    </Article>
  )
}
