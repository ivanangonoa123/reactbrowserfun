 import {Schema, arrayOf} from 'normalizr'

 export const player = new Schema('players')

 export const partido = new Schema('partidos', {idAttribute:'_id'})
 partido.define({
   players: arrayOf(player)
 })
 export const arrayOfPartidos = arrayOf(partido)
