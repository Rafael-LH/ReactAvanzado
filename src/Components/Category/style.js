import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

/**
 * Styled component puede recibir un parametro y ese parametro puede ser
 * un componente pero no cualquier componente si no un componente
 * que pueda tener una propiedad className y Link si que puede aceptar esa prop
 */
export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`
export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0,0,0,.2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`
