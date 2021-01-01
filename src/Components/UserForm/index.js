import React from 'react'
import { Form, Input, Button, BtnChangeForm, Title } from './styles'
import { useConfigForm } from '@hooks/useConfigForm'

export const UserForm = ({ handleChange, onSubmit, loading, form }) => {
  const { handleChangeForm, configForm } = useConfigForm()
  return (
    <>
      <Title>{configForm.prevTitle}</Title>
      <Form onSubmit={onSubmit}>
        <Input type="text" name='email' placeholder="Email" value={form.email} onChange={handleChange} />
        <Input type="password" name='password' placeholder="Password" value={form.password} onChange={handleChange} />
        <Button loading={loading.toString()}>
          {loading
            ? configForm.nextTitle
            : configForm.prevTitle}
        </Button>
      </Form>
      <BtnChangeForm onClick={handleChangeForm}>
        <span>
          {!!configForm.isSession
            ? '¿ No tienes una cuenta ? '
            : '¿ Ya tienes uan cuenta ? '}
        </span>
        {configForm.titleChangeButton}
      </BtnChangeForm>
    </>
  )
}