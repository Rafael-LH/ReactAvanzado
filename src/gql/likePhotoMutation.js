import { gql } from '@apollo/client'

export const likePhotoMutation = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input){
      id
      liked
      likes
  }
}
`