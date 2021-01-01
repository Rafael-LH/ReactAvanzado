import React from 'react'
import { Form, Input, Button, BtnChangeForm, Title } from './styles'

export const UserForm = ({ handleChange, onSubmit, loading, form, handleChangeForm, configForm }) => {
  return (
    <>
      <Title>{configForm.prevTitle}</Title>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name='email'
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          disabled={loading} />
        <Input
          type="password"
          name='password'
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          disabled={loading} />
        <Button disabled={loading}>
          {loading
            ? configForm.nextTitle
            : configForm.prevTitle}
        </Button>
      </Form>
      <BtnChangeForm onClick={handleChangeForm}>
        <span>
          {!!configForm.isSession
            ? '¿ No tienes una cuenta ? '
            : '¿ Ya tienes una cuenta ? '}
        </span>
        {configForm.titleChangeButton}
      </BtnChangeForm>
    </>
  )
}