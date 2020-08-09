import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activeAuth }) => (
        <>
          <UserForm title='Registrarse' onSubmit={activeAuth} />
          <UserForm title='Iniciar Sesión' onSubmit={activeAuth} />
        </>
      )
    }
  </Context.Consumer >
)