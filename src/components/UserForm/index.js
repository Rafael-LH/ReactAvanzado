import React, { useState } from 'react'
import { Form, H2, Input, Button } from './styles'

export const UserForm = ({ title, onSubmit }) => {
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
    <Form onSubmit={onSubmit}>
      <H2>{title}</H2>
      <Input type="text" name='email' placeholder='Email' onChange={handleChange} />
      <Input type="password" name='password' placeholder='Password' onChange={handleChange} />
      <Button type='submit'>{title}</Button>
    </Form>
  )
}