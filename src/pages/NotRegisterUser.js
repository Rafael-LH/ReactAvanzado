import React from 'react'
import { UserForm } from '@components/UserForm'
import { useFormRegister } from '@hooks/useFormRegister'
import { ErrorContent } from '@components/ErrorContent'

export const NotRegisterUser = () => {
  const { form, handleChange, handleSubmit, loading, error } = useFormRegister()
  return (
    <>
      <UserForm
        loading={loading}
        handleChange={handleChange}
        onSubmit={handleSubmit}
        form={form}
      />
      {error && <ErrorContent message={error.message} />}
    </>
  )
}