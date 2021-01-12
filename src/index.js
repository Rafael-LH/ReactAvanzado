import React from 'react'
import { render } from 'react-dom'
import { App } from '@components/App'
import { ApolloProvider } from '@apollo/client'
import apolloClient from './config/apolloClient'
import { Provider } from './Context'

render(
  <Provider>
    <ApolloProvider client={apolloClient.client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('app')
)
