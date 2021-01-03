import { gql } from '@apollo/client'

export const getFavorites = gql`
  query getFavs{
    favs{
      id
      categoryId
      src
      likes
      userId
    }
  }
`