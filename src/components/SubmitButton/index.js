import React from 'react'
import { Button } from './styles'
import propType from 'prop-types'

export const SubmitButton = ({ children, onClick, disabled }) => (
  <Button type='submit' onClick={onClick} disabled={disabled}>{children}</Button>
)
SubmitButton.propType = {
  disabled: propType.bool,
  onClick: propType.func,
  children: propType.node.isRequired // node es cualquier cosa que react pueda renderizar
}