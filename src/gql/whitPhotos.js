import { gql } from '@apollo/client';
export const withPhotos = gql`
  query GetCategories($categoryId: ID) {
      photos(categoryId: $categoryId){
      id
      categoryId
      src
      likes
      liked
    }
  }
`