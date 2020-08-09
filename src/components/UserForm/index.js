import React, { useState } from 'react'

export const UserForm = ({ onSubmit }) => {
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
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name='email' placeholder='Email' onChange={handleChange} />
      <input type="password" name='password' placeholder='Password' onChange={handleChange} />
      <button type='submit'>Iniciar sesión</button>
    </form>
  )
}