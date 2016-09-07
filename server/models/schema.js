const mongoose = require('mongoose')

var partidoSchema = new mongoose.Schema({ 
  title: String,
  date: Date,
  polla_partido: Number,
  polla_asado: Number,
  players_by_team: Number,
  players: Array
})

var Partido = mongoose.model('Partido', partidoSchema)

export default Partido
