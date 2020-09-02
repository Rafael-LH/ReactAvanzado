import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

const NotRegisteredUser = () => {
  // de esta manera nos podremos traer el consumer sin necesidad de insertarlo directo en el html
  // con Context.consumer nos ahorramos esa parte y queda un codigo mas limpio
  const { activeAuth } = useContext(Context) // al useContext le debemos pasar el contexto para que de desta manera poder utilizar el consumer
  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            function onSubmit(form) {
              const input = form
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { sigup } = data
                activeAuth(sigup)
              })
            }
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
            function onSubmit(form) {
              const input = form
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activeAuth(login)
              })
            }
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
export default NotRegisteredUser