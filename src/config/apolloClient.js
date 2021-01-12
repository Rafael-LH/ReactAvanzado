import { from, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const httpLink = createHttpLink({
  uri: 'https://petgram-server-lh.rafael-lh.vercel.app/graphql'
})
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})
const handleError = onError(({ graphQLErrors, networkError }) => {
  const { message } = graphQLErrors ? graphQLErrors[0] : ''
  console.log(graphQLErrors, networkError)
  if (message === 'user does not exist' || networkError) {
    localStorage.removeItem('token')
    location.href = '/'
    console.log(`[Network error]: ${networkError}`)
  }
})
const client = new ApolloClient({
  link: from([
    handleError,
    authLink.concat(httpLink)
  ]),
  cache: new InMemoryCache()
})
export default { client }
