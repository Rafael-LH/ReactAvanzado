import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

// styles 
export const Article = styled.article`
  min-height: 200px;
`
export const ImgWrapper = styled.figure`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  /* De esta manera nuestra imagen tendra la misma relacion de aspecto, se empujara el contenido de la imagen hacia arriba */
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`
export const Img = styled.img`
  box-shadow: 0 10px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  /* funcion que recibe una prop de showFadeIn la cual es mandada desde mi componente PhotoCard */
  ${props => props.showFadeIn && css`
    ${fadeIn()}
  `
  }
`
export const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 4px;
    cursor: pointer;
  }
`
