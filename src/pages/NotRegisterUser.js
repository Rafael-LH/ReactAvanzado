import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '@components/UserForm'

export const NotRegisterUser = () => {
  const { activeAuth } = useContext(Context)

  return (
    <>
      <UserForm title="Registrarse" onSubmit={() => activeAuth()} />
      <UserForm title="Iniciar sesión" onSubmit={() => activeAuth()} />
    </>
  )
}