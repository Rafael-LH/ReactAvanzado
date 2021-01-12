import { gql } from '@apollo/client'
export const getSinglePhoto = gql`
  query withPhoto($id: ID!) {
    photo(id: $id){
    id
    categoryId
    src
    likes
    liked
   }
  }
`
