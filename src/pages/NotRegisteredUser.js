import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activeAuth }) => (
        <UserForm onSubmit={activeAuth} />
      )
    }
  </Context.Consumer>
)