import React from 'react'
import { Mutation } from 'react-apollo' // React Apollo es un cliente que nos va a permitir conectarnos a un servidor GraphQL
import { gql } from 'apollo-boost' // GraphQL es un lenguaje creado por Facebook para obtener solo los datos que necesitamos en nuestra aplicación

const LOGIN = gql`
  mutation login($input: UserCredentials!){
    login (input: $input)
  }
`

export const LoginMutation = ({ children }) => (
  <Mutation mutation={LOGIN} >
    {children}
  </Mutation>
)