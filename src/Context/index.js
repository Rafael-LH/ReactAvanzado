import React, { createContext, useState } from 'react'

export const Context = createContext()

export const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem('token')
  })

  const value = {
    isAuth,
    activeAuth: (token) => {
      // console.log(token);
      localStorage.setItem('token', token)
      setIsAuth(true)
    }
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}