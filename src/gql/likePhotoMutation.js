import { gql } from '@apollo/client'

export const likePhotoMutation = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input){
    id
    liked
    likes
  }
}
`