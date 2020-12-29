import React from 'react'
import { useFormRegister } from '@hooks/useFormRegister'
import { Form, Input, Button, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const { form, handleChange } = useFormRegister()
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input type="text" name='email' placeholder="Email" value={form.email} onChange={handleChange} />
        <Input type="password" name='password' placeholder="Password" value={form.password} onChange={handleChange} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}