import { gql } from '@apollo/client'

export const loginMutation = gql`
  mutation login($input: UserCredentials!) {
      login(input: $input)
  }
`
