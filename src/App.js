import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Context } from './Context'

// import dinamico solo para mostrar el componente Favs si esta siendo interception observer en el screen del browser
// para que un import dinamico funcione el componente el cual se esta llamando dinamicamente se debe de exportar por defecto
// y no debe de exportarse nombrado 

const Favs = React.lazy(() => import('./pages/Favs'))
const Home = React.lazy(() => import('./pages/Home'))
const User = React.lazy(() => import('./pages/User'))
const Detail = React.lazy(() => import('./pages/Detail'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))

export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    // React Suspense recibe un valor por defecto fallback el cual le tenemos que indicar que rendeara 
    // en lo que el componente esta suspendido, este caso solo rendereamos un div vacio
    <Suspense fallback={<></>}>
      <GlobalStyle />
      <Logo />
      <Router>
        {/* lo que hace es que si ninguna ruta esta haciendo match entonces lo primero que hara sera renderear NotFound */}
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' noThrow />}
        {!isAuth && <Redirect from='/user' to='/login' noThrow />}
        {isAuth && <Redirect from='/login' to='/' noThrow />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}