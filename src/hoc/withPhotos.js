import { graphql } from 'react-apollo' // React Apollo es un cliente que nos va a permitir conectarnos a un servidor GraphQL
import { gql } from 'apollo-boost' // GraphQL es un lenguaje creado por Facebook para obtener solo los datos que necesitamos en nuestra aplicación

/**
 * hoc (high, order, components)
 */

// categoryId es una prop que recibimos en APP.js
export const withPhotos = graphql(gql`
  query getPhotos($categoryId: ID) { 
    photos(categoryId: $categoryId) {
      id,
      categoryId,
      src,
      likes,
      userId,
      liked
    }
  }
`)
