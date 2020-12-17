import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder } from "react-icons/md";
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const articleRef = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      console.log(isIntersecting);
      if (isIntersecting) {
        setShow(true)
        observer.disconnect() // lo que hacemos es desconectar el observador para que deje de observar
      }
    })
    observer.observe(articleRef.current)
  }, [articleRef])

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
          <Button>
            <MdFavoriteBorder size='32px' /> {likes} likes!
          </Button>
        </>
      }
    </Article>
  )
}