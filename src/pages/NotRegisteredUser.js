import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activeAuth }) => (
        <RegisterMutation>
          {
            (register, { data, loading, error }) => {
              const onSubmit = (form) => {
                const input = form
                const variables = { input }
                register({ variables }).then(activeAuth)
              }
              const errorMessage = (error) && 'Usuariaro registrado o ha ocurrido algun error.'
              return (
                <UserForm disabled={loading} errorMessage={errorMessage} title={loading ? 'Cargando...' : 'Registrarse'} onSubmit={onSubmit} />
              )
            }
          }
          {/* <UserForm title='Iniciar Sesión' onSubmit={activeAuth} /> */}
        </RegisterMutation>
      )
    }
  </Context.Consumer>
)