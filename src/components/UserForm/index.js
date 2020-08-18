import React, { useState } from 'react'
import { Form, H2, Input, Button } from './styles'
import { ErrorMessage } from '../ErrorMessage'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ title, onSubmit, errorMessage, disabled }) => {
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
    onSubmit(form)
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <H2>{title}</H2>
        <Input type="text" name='email' placeholder='Email' onChange={handleChange} disabled={disabled} />
        <Input type="password" name='password' placeholder='Password' onChange={handleChange} disabled={disabled} />
        <SubmitButton disabled={disabled}>
          {title}
        </SubmitButton>
      </Form>
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </>
  )
}