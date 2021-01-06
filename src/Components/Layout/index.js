import React, { useContext } from 'react'
import { Logo } from '@components/Logo'
import { NavBar } from '@components/NavBar'
import { Context } from '../../Context'
import { Section, ContentLogo, Ul, Input, Li } from './styles'
import { MdPerson } from "react-icons/md";
import PropTypes from 'react'

export const Layout = ({ children }) => {
  const SIZE = '23px'
  const { isAuth, removeAuth } = useContext(Context)

  return (
    <Section>
      <ContentLogo>
        <Logo />
        {
          isAuth &&
          <Ul>
            <Li>
              <Input type="checkbox" id='user' />
              <label htmlFor="user">
                <MdPerson size={SIZE} />
                User
              </label>
              <ul>
                <li>
                  <button onClick={() => removeAuth()}>Cerrar sesión</button>
                </li>
              </ul>
            </Li>
          </Ul>
        }
      </ContentLogo>
      {children}
      <NavBar />
    </Section>
  )
}
/**
 * con el valor de node lo que le estamos indicando es que tiene que recibir
 * cualquier cosa que react puede renderizar un objeto, array, strings, componentes etc.
 */
// Layout.propTypes = {
//   children: PropTypes.node
// }