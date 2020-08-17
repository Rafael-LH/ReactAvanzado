import React from 'react'
import { gql } from 'apollo-boost' // GraphQL es un lenguaje creado por Facebook para obtener solo los datos que necesitamos en nuestra aplicación
import { Mutation } from 'react-apollo' // React Apollo es un cliente que nos va a permitir conectarnos a un servidor GraphQL

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!){
    likePhoto(input: $input ){
      id,
      liked,
      likes
    }	
  }
`

export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE_PHOTO}>
      {children}
    </Mutation>
  )
}