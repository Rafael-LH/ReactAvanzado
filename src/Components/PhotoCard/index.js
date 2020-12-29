import React from 'react'
import { Link } from '@reach/router'
// Styles
import { ImgWrapper, Img, Article } from './styles'
//Components
import { FavButton } from "@components/FavButton"
//Hooks
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { useLikePhoto } from "@hooks/useLikePhoto";

export const PhotoCard = ({ id, likes, src }) => {
  /**
   * Hooks
   */
  const { likeAnonymousPhoto } = useLikePhoto()
  const { show, DOMRef } = useIntersectionObserver()
  /**
   * States
   */
  const [liked, setLiked] = useLocalStorage(`like-${id}`, likes)
  /**
   * Handles
   */
  const handleFavClick = () => {
    !liked && likeAnonymousPhoto({
      variables: {
        input: {
          id,
        }
      }
    })
    setLiked(!liked)
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