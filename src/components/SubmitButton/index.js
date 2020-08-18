import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ children, onClick, disabled }) => (
  <Button type='submit' onClick={onClick} disabled={disabled}>{children}</Button>
)