import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import App from './containers/App'
import IndexPage from './containers/IndexPage'
import PartidoEditPage from './containers/PartidoEditPage'
import reducer from './reducers'

require("./public/styles/bootstrap.min.css");

const middleware = [thunkMiddleware];

const store = createStore (
   reducer,
   applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
   <Router history={hashHistory}>
     <Route path='/' component={App}>
      <IndexRoute component={IndexPage}/>
      <Route path='/partido/:id' component={PartidoEditPage}/>
     </Route>
   </Router>
  </Provider>,
  document.getElementById('root')
);
