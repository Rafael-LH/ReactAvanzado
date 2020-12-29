import React, { useContext } from 'react'
import { GlobalStyle } from '../styles/GlobalStyles'
import { Layout } from '@components/Layout'
import { Detail } from '@pages/Detail'
import { Home } from '@pages/Home'
import { NotRegisterUser } from '@pages/NotRegisterUser'
import { User } from '@pages/User'
import { Login } from '@pages/Login'
import { Favs } from '@pages/Favs'
import { Router } from '@reach/router'
import { Context } from '../Context'

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  const { isAuth } = useContext(Context)

  return (
    <Layout>
      <GlobalStyle />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      {
        isAuth
          ?
          <Router>
            <Favs path='/favs' />
            <User path='/user' />
          </Router>
          :
          <Router>
            <NotRegisterUser path='/favs' />
            <NotRegisterUser path='/user' />
          </Router>
      }
    </Layout>
  )
}