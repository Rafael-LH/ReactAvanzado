import { useState, useContext } from 'react'
import { Context } from '../Context'
import { useMutation } from '@apollo/client'
import { registerMutation } from '@gql/registerMutation'


export const useFormRegister = () => {
  const { activeAuth } = useContext(Context)
  const [signup, { loading, error }] = useMutation(registerMutation)
  /**
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
  const handleSubmit = (e) => {
    e.preventDefault()
    signup({
      variables: {
        input: {
          ...form
        }
      }
    })
      .then(_ => activeAuth())
      .catch(err => console.log(`Ha ocurrido algun error ${err}`))

  }
  return { form, handleChange, handleSubmit, loading, error }
} 