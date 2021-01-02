import { useState, useContext } from 'react'
import { Context } from '../Context'
import { useMutation } from '@apollo/client'
import { registerMutation } from '@gql/registerMutation'
import { loginMutation } from '@gql/loginMutation'


export const useFormRegister = ({ isSession }) => {

  const { activeAuth } = useContext(Context)
  const [success, setSuccess] = useState({
    loading: false,
    error: false,
    message: ''
  })
  const [signup] = useMutation(registerMutation)
  const [login] = useMutation(loginMutation)
  /**
   * const [signup, { loading, error }] = useMutation(registerMutation)
   * En caso de que tenga en un mismo metodo useQuery y useMutation ambos retornan 
   * loading y error entonces eso ocasionaria un error pero podemos renombrar esos valores de
   * la siguiente manera
   * const [signup, { loading: mutationLoading, error: mutationError }] = useMutation(registerMutation)
   * y ya de esa manera puedo utilizar mutationLoading para la espera y mutationError para los errores
   * */

  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const getLoginMutation = () => {
    setSuccess({ ...success, loading: true })
    login({
      variables: {
        input: { ...form }
      }
    })
      .then(({ data: { login } }) => activeAuth(login))
      .catch(_ => {
        setSuccess({
          ...success,
          loading: false,
          error: true,
          message: 'Los valores son incorrectos'
        })
      })
  }
  const getRegisterMutation = () => {
    setSuccess({ ...success, loading: true })
    signup({
      variables: {
        input: { ...form }
      }
    })
      .then(_ => activeAuth())
      .catch(_ => {
        setSuccess({
          ...success,
          loading: false,
          error: true,
          message: 'El usuario ya existe o hay algún error'
        })
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    (isSession) ? getLoginMutation() : getRegisterMutation()
  }
  return { form, handleChange, handleSubmit, success }
} 