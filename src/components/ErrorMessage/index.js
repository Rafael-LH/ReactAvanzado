import React from 'react'
import { ContainerError, Paragraph } from './styles'

export const ErrorMessage = ({ errorMessage = 'Ha ocurrido algun error' }) => (
  <ContainerError>
    <Paragraph>{errorMessage}</Paragraph>
  </ContainerError>
)