import { useState } from 'react'

export const useFormRegister = () => {
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
  return { form, handleChange }
} 