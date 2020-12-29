import React from 'react'
import { render } from 'react-dom'
import { App } from '@components/App'
import { ApolloProvider } from '@apollo/client';
import apolloClient from './config/apolloClient'
import Context from './Context'

render(
  <Context.Provider value={{ isAuth: false }}>
    <ApolloProvider client={apolloClient.client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
