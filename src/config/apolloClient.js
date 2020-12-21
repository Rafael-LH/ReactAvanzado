import { ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://petgram-server-lh.rafael-lh.vercel.app/graphql',
  cache: new InMemoryCache()
});
export default { client }