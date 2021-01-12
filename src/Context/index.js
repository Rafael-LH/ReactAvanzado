import React, { createContext, useState, useEffect } from 'react'
import apolloClient from '../config/apolloClient'

export const Context = createContext()

export const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem('token')
  })

  const value = {
    isAuth,
    activeAuth: (token) => {
      // console.log(token);
      setIsAuth(true)
      localStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      localStorage.removeItem('token')
    }
  }

  useEffect(() => {
    // cada que hacemos logout debemos de limpar la cache de apollo client
    apolloClient.client.resetStore()
  }, [isAuth])

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
