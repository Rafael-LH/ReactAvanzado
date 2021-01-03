import React from 'react'
import { Link } from '@reach/router'
// Styles
import { ImgWrapper, Img, Article } from './styles'
//Components
import { FavButton } from "@components/FavButton"
//Hooks
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { useLikePhoto } from "@hooks/useLikePhoto";

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
          id,
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
              <Img src={src} alt="image" />
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