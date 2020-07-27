import styled from 'styled-components'
import { Link as LinkRouter} from '@reach/router'

// importamos el componente Link de reach router porque ese componente va haciendo push en el history
// ese se lo pasamos a nuestro styled el cual puede recibir como parametro un componente pero no no cualquier componente si no
// un componenete de le puedas setear la propiedad de className ya que styled componente necesita inyectarle una class
export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`
export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 100%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`
