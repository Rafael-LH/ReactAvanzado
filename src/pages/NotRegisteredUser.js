import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

const onSubmitClosure = (mutation, form, activeAuth) => {
  const input = form
  const variables = { input }
  function onSubmit() {
    mutation({ variables }).then(activeAuth)
  }
  onSubmit()
}
export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activeAuth }) => (
        <>
          <RegisterMutation>
            {
              (register, { data, loading, error }) => {
                const onSubmit = (form) => onSubmitClosure(register, form, activeAuth)
                const errorMessage = (error) && 'Usuariaro registrado o ha ocurrido algun error.'
                return (
                  <UserForm
                    disabled={loading}
                    errorMessage={errorMessage}
                    title={loading ? 'Cargando...' : 'Registrarse'}
                    onSubmit={onSubmit} />
                )
              }
            }
          </RegisterMutation>
          <LoginMutation>
            {
              (login, { data, loading, error }) => {
                const onSubmit = (form) => onSubmitClosure(login, form, activeAuth)
                const errorMessage = (error) && 'Los valores son incorrectos.'
                return (
                  <UserForm
                    disabled={loading}
                    errorMessage={errorMessage}
                    title={loading ? 'Cargando...' : 'Iniciar Sesión'}
                    onSubmit={onSubmit} />
                )
              }
            }
          </LoginMutation>
        </>
      )
    }
  </Context.Consumer>
)