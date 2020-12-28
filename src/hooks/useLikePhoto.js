// GraphQL
import { likePhotoMutation } from '@gql/likePhotoMutation'
import { useMutation } from '@apollo/client'

export const useLikePhoto = () => {
  const [likeAnonymousPhoto] = useMutation(likePhotoMutation)
  return { likeAnonymousPhoto }
}