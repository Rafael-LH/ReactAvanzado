import { gql } from 'apollo-boost' // GraphQL es un lenguaje creado por Facebook para obtener solo los datos que necesitamos en nuestra aplicación

export const queryPhoto = gql`
 query getSinglePhoto($id: ID!){
  photo(id: $id){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`