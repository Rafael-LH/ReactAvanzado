import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from '../styles/GlobalStyles'
import { Layout } from '@components/Layout'
import { Router, Redirect } from '@reach/router'
import { Context } from '../Context'

/**
 * Lo que hacemos con React.lazy es no mostrar un componente si no lo necesitamos
 * de manera que solo se va a renderear cuando lo necesitemos
 * para utilizar lazy de React debemos de llamar a Suspense (react) y Suspense
 * recibe como parametro un fallback que sera lo que rendeara cuando nuestro
 * componente este suspendido, en este caso mandamos solo un div
 * Otro punto importante es exportar nuestro componente por defecto y no de
 * manera nombrada porque si no nuestro import dinamico no funcionara
 */

/**
 * Lazy
 */
const Favs = React.lazy(() => import('@pages/Favs'))
const Detail = React.lazy(() => import('@pages/Detail'))
const Home = React.lazy(() => import('@pages/Home'))
const NotRegisterUser = React.lazy(() => import('@pages/NotRegisterUser'))
const User = React.lazy(() => import('@pages/User'))
const NotFound = React.lazy(() => import('@components/Error/404'))

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<></>}>
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
    </Suspense>
  )
}
