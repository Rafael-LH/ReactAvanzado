import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'

const User = () => {
  const { removeAuth, disabled } = useContext(Context)
  // console.log(disabled)
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth} disabled={disabled}>
        Cerrar sesión
      </SubmitButton>
    </>
  )
}
export default User