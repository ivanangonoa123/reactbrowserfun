import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './containers/App'

const middleware = [thunk];

const store = createStore (
   reducer,
   applyMiddleware(...middleware)
)


render(

  <Provider store={store}>
  <h1>Hello</h1>
  </Provider>
  document.getElementById('root')
);
