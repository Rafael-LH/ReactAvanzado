import React, { useContext } from 'react'
import { Context } from '../Context'

export const NotRegisterUser = () => {
  const { activeAuth } = useContext(Context)
  return (
    <form action="" onSubmit={() => activeAuth()}>
      <button>Register</button>
    </form >
  )
}