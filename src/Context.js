import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  // esto hace hace en una funcion ya que el window.sessionStorage es sincrono de manera que bloquea el hilo principal 
  // entonces ya con una funcion esto se convierte en asincrono
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })
  const value = {
    isAuth,
    activeAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    }
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
export default {
  Provider,
  Consumer: Context.Consumer
}
