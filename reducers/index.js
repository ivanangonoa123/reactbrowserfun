import { combineReducers } from 'redux'

const ADD_PARTIDO = 'ADD_PARTIDO';
const ADD_PLAYER = 'ADD_PLAYER';
const CHANGE_STATUS = 'CHANGE_STATUS';

const initialState = {
  partidoIds: [1,2],

  partidos: {
    1:{
      id: 1,
      title: "Partido Jueves",
      date: "20/10/2016",
      total_polla: 800,
      players: []
    },
    2: {
      id: 2,
      title: "Partido Viernes",
      date: "20/10/2015",
      total_polla: 800,
      players: []
    }
  },

  players: [
   1:{
     id: 1,
     name: "Pablo",
   }
 ],

  playerEntries: [
    1: {
      id: 1,
      playerId:1,
      gameId: 2,
      status: 0
    }
  ]
};

function partidoById(state = initialState.partidos, action) {
  switch (action.type) {
    case ADD_PARTIDO:
    return Object.assign({}, state, {
      [action.data.id]: {
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

function partidoIds(state=initialState.partidoIds, action) {
  switch (action.type) {
      case ADD_PARTIDO:
      return [ ...state, action.data.id]
      break
    default:
      return state
  }
}

export default combineReducers({
  partidoById,
  partidoIds
})

export function getPartidos(state) {
  return state.partidoIds.map(id=> getPartido(state, id))
}

export function getPartido(state, id) {
  return state.partidoById[id]
}
