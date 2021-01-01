import React from 'react'
import { UserForm } from '@components/UserForm'
import { useFormRegister } from '@hooks/useFormRegister'
import { ErrorContent } from '@components/ErrorContent'
import { useConfigForm } from '@hooks/useConfigForm'

export const NotRegisterUser = () => {
  const { handleChangeForm, configForm } = useConfigForm()
  const { form, handleChange, handleSubmit, success: { loading, error } } = useFormRegister(configForm)

  return (
    <>
      <UserForm
        loading={loading}
        handleChange={handleChange}
        onSubmit={handleSubmit}
        form={form}
        handleChangeForm={handleChangeForm}
        configForm={configForm}
      />
      {error && <ErrorContent message={'El usuario ya existe o hay algún error'} />}
    </>
  )
}