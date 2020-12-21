import React from 'react'
import { render } from 'react-dom'
import { App } from '@components/App'
import { ApolloProvider } from '@apollo/client';
import apolloClient from './config/apolloClient'

render(
  <ApolloProvider client={apolloClient.client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
