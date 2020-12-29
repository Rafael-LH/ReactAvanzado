import React from 'react'
import { GlobalStyle } from '../styles/GlobalStyles'
import { Logo } from '@components/Logo'
import { Detail } from '@pages/Detail'
import { Home } from '@pages/Home'
import { Router } from '@reach/router'

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
    </>
  )
}