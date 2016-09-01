import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './components/App'

const middleware = [thunk];

const ADD_PARTIDO = 'ADD_PARTIDO';

const initialState = {
  partidos = []
};


function partidos(state = initialState.partidos, action) {
  switch (action.type) {
    case ADD_PARTIDO:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          date: action.date
        }
      ]
      break;
    default:
      return Object.assign({}, state, {})
  }
}




const store = createStore (
   reducer,
   applyMiddleware(...middleware)
)


render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
