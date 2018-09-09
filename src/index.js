import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from 'components/App'
import registerServiceWorker from 'registerServiceWorker'
import { API_URL } from 'env'
import reducers from 'reducers'
import App from 'containers/App'
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const httpLink = createHttpLink({ uri: API_URL })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <div>
        <App />
      </div>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker()
