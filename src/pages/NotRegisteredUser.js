import React from 'react'
import Context from '../Context'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activeAuth }) => (
        <form onSubmit={activeAuth}>
          <button type='submit'>Iniciar sesión</button>
        </form>
      )
    }
  </Context.Consumer>
)