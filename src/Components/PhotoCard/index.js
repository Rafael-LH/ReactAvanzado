import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'
// Styles
import { ImgWrapper, Img, Article } from './styles'
// Components
import { FavButton } from '@components/FavButton'
// Hooks
import { useIntersectionObserver } from '@hooks/useIntersectionObserver'
import { useLikePhoto } from '@hooks/useLikePhoto'

export const PhotoCard = ({ id, liked, likes, src }) => {
  /**
   * Hooks
   */
  const { likePhoto } = useLikePhoto()
  const { show, DOMRef } = useIntersectionObserver()
  /**
   * Handles
   */
  const handleFavClick = () => {
    likePhoto({
      variables: {
        input: {
          id
        }
      }
    })
  }

  return (
    <Article ref={DOMRef}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt='image' />
              </ImgWrapper>
            </Link>
            <FavButton
              liked={liked}
              likes={likes}
              handleFavClick={handleFavClick}
            />
          </>
      }
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  // custom PropType
  likes: function (props, propName, componentName) { // son los tres valores que recibe un custom propType
    const propsValue = props[propName]
    if (propsValue === 'undefined') {
      return new Error(`${propName} value must be defined`)
    }
    if (propsValue < 0) {
      return new Error(`${propName} vale must be greater than 0`)
    }
  }
}
// Los errores de los PropTypes solo se ejecutan en desarrollo no en produccion
