import { normalize } from 'normalizr'
import * as schema from './schema'
import fetch from 'isomorphic-fetch'

export const ADD_PARTIDO = 'ADD_PARTIDO'

export const REQUEST_PARTIDOS = 'REQUEST_PARTIDOS'
export const RECEIVE_PARTIDOS = 'RECEIVE_PARTIDOS'

export const ADD_PLAYER = 'ADD_PLAYER'
export const CHANGE_STATUS = 'CHANGE_STATUS'

const API = 'http://localhost:3000/api'

export function requestPartidos() {
  return {
    type: REQUEST_PARTIDOS
  }
}

export function receivePartidos(response) {
  debugger
  return {
    type: RECEIVE_PARTIDOS,
    ids: response.result,
    partidos: response.entities.partidos,
    receivedAt: Date.now()
  }
}

export function fetchPartidos() {
  return (dispatch) => {
    dispatch(requestPartidos())
debugger
    return fetch(API+'/partidos').then(response=>response.json())
    .then(response => {
      console.log('normalized response',
        //normalize(response,schema.arrayOfPartidos)
      )
        debugger
      dispatch(receivePartidos(normalize(response,schema.arrayOfPartidos)))
    })
  }
}


export const addPartido = (title, date, polla) => {
  console.log(nextPartidoId)
  return {
    type: 'ADD_PARTIDO',
    data: {
      id: nextPartidoId++,
      title: title,
      date: date,
      total_polla: 800,
      players: []
    }
  }
}
