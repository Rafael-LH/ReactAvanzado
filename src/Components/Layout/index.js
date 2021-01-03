import React, { useContext } from 'react'
import { Logo } from '@components/Logo'
import { NavBar } from '@components/NavBar'
import { Context } from '../../Context'
import { ContentLogo, Ul, Input, Li } from './styles'
import { MdKeyboardArrowDown } from "react-icons/md";

export const Layout = ({ children }) => {
  const SIZE = '23px'
  const { isAuth, removeAuth } = useContext(Context)

  return (
    <>
      <ContentLogo>
        <Logo />
        {
          isAuth &&
          <Ul>
            <Li>
              <Input type="checkbox" id='user' />
              <label htmlFor="user">
                User
                <MdKeyboardArrowDown size={SIZE} />
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
    </>
  )
}