import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './containers/App'
import PartidoEditPage from './containers/PartidoEditPage'
import reducer from './reducers'

require("./public/styles/bootstrap.min.css");

const middleware = [thunk];

const store = createStore (
   reducer,
   applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
   <Router history={browserHistory}>
     <Route path='/' component={App}></Route>
     <Route path='/partido/:id' component={PartidoEditPage}></Route>
   </Router>
  </Provider>,
  document.getElementById('root')
);
