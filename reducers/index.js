import { combineReducers } from 'redux'

import {
  ADD_PARTIDO, REQUEST_PARTIDOS, RECEIVE_PARTIDOS
} from '../actions'

const STATUS_PENDING = 0;
const STATUS_IN = 1;
const STATUS_BENCH = 2;

const initialState = {


  partidos: {
    isFetching: false,
    didInvalidate: false,
    ids:[],
    items: {}
  },

  players: {
    1:{
      id: 1,
      name: "Pablo",
    }
  },

  playerEntries: {
    1: {
      id: 1,
      playerId:1,
      gameId: 2,
      status: STATUS_IN,
      asado: 0
    }
  }
};

function partidoApp(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PARTIDOS:
    return Object.assign({}, state, {
      partidos: partidos(state.partidos, action)
    })
    case RECEIVE_PARTIDOS:
    return Object.assign({}, state, {
      partidos: partidos(state.partidos, action)
    })
    break;
    default:
    return state
  }
}

function partidos(state = {
  isFetching: false,
  didInvalidate: false,
  items: {}
}, action) {
  switch (action.type) {
    case REQUEST_PARTIDOS:
    return Object.assign({}, state,
      {
        isFetching: true,
        didInvalidate: false
      })
      case RECEIVE_PARTIDOS:
      return Object.assign({}, state,
        {
          isFetching: false,
          didInvalidate: false,
          ids:action.ids,
          items: action.partidos,
          lastUpdated: action.receivedAt
        })
        default:
        return state
      }
    }

    export default combineReducers({
      partidoApp
    })

    /*function partidoById(state = {  isFetching: false,
      didInvalidate: false,
      items:{}
    }, action) {
      switch (action.type) {
        case ADD_PARTIDO:
        return Object.assign({}, state, {
          items[action.data.id]: {
            id: action.data.id,
            title: action.data.title,
            date: action.data.date,
            total_polla: action.data.total_polla,
            players: []
          }
        })
        break;
        default:
        return state
      }
    }

    function partidoIds(state=[], action) {
      switch (action.type) {
        case ADD_PARTIDO:
        return [ ...state, action.data.id]
        break
        default:
        return state
      }
    }*/


    export function getPartidos(state) {

      var partidos = state.partidoApp.partidos
      var list = partidos.ids.map(id=>{
        return partidos.items[id]
      })
           debugger
      return list
    }

    /*export function getPartido(state, id) {
      return state.partidoById[id]
    }*/
