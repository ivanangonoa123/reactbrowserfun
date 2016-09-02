import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './containers/App'
import {partido} from './reducers'

const middleware = [thunk];

const store = createStore (
   partido,
   applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
