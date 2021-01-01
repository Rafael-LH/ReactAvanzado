import { gql } from '@apollo/client'

export const registerMutation = gql`
  mutation signup($input: UserCredentials!) {
      signup(input: $input)
  }
`