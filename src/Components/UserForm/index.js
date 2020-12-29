import React from 'react'
import { useFormRegister } from '@hooks/useFormRegister'

export const UserForm = ({ onSubmit }) => {
  const { form, handleChange } = useFormRegister()
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name='email' placeholder="Email" value={form.email} onChange={handleChange} />
      <input type="password" name='password' placeholder="Password" value={form.password} onChange={handleChange} />
      <button>Inicial sesión</button>
    </form >
  )
}