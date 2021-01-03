import React, { useContext } from 'react'
import { GlobalStyle } from '../styles/GlobalStyles'
import { Layout } from '@components/Layout'
import { Detail } from '@pages/Detail'
import { Home } from '@pages/Home'
import { NotRegisterUser } from '@pages/NotRegisterUser'
import { User } from '@pages/User'
import { Favs } from '@pages/Favs'
import { Router, Redirect } from '@reach/router'
import { Context } from '../Context'
import { NotFound } from './Error/404'

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  const { isAuth } = useContext(Context)
  return (
    <Layout>
      <GlobalStyle />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisterUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
    </Layout>
  )
}