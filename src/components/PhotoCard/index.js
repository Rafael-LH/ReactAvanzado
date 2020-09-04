import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router'
import { Article, ImgWrapper, Img } from './style'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import propTypes from 'prop-types'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [showFadeIn, setShowFadeIn] = useState(false);
  const [show, element] = useNearScreen();

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
                    togglelike({
                      variables: {
                        input: {
                          id
                        }
                      }
                    })
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
PhotoCard.propTypes = {
  id: propTypes.string.isRequired,
  liked: propTypes.bool.isRequired,
  src: propTypes.string.isRequired,
  //custom propType 
  likes: function (props, propName, componentName) { // son los tres valores que recibe un custom propType
    const propsValue = props[propName]

    if (propsValue === 'undefined') {
      return new Error(`${propName} value must be defined`)
    }

    if (propsValue < 0) {
      return new Error(`${propName} vale must be greater tha 0`)
    }
  }
}

// Los errores de los propTypes solo se ejecutan en desarrollo no en produccion