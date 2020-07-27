import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 500px;
`
// importamos el componente Link de reach router porque ese componente va haciendo push en el history
// ese se lo pasamos a nuestro styled el cual puede recibir como parametro un componente pero no cualquier componente si no
// un componenete que le puedas setear la propiedad de className (como por ejemplo un elemento del DOM) 
// ya que styled componente necesita inyectarle una class
export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  text-decoration: none;
`