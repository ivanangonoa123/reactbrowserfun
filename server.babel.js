import express from 'express'
import Partido from './server/models/schema.js'
const bodyParser = require('body-parser');
const MongoClient =  require('mongodb').MongoClient
const mongoose = require('mongoose')
const app = express()


const router = express.Router()

router.route('/partidos')
.get((req, res)=>{
  Partido.find((err, partidos)=>{
    if(err) {
      return res.send(err)
    }
    res.json(partidos)
  })
})
.post((req, res)=>{
  var partido = new Partido(req.body)

  partido.save((err)=>{
    if(err) {
      console.info(err)
      return res.send(err)
    }

    res.send({ message: 'partido Added' });
  })
})

router.route('partidos/:id')
.put((req, res) => {
  Partido.findOne({_id: req.params.id}, (err, partido) => {
    if(err) {
      console.info(err)
      return res.send(err)
    }

    for (prop in req.body) {
      partido[prop] = req.body[prop]
    }

    partido.save((err)=>{
      if(err) {
        console.info(err)
        return res.send(err)
      }

      res.json({message:'partido updated'})
    })
  })
})
.get((req, res) => {
  Partido.findOne({_id: req.params.id}, (err, partido) =>{

    if(err) {
      console.info(err)
      return res.send(err)
    }

    res.json(partido)
  })
})

app.use('/', express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use('/api', router)
let options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.connect('mongodb://localhost:27017/Futbol', options)

var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.info("connected tu databeis")

  /*var partido = new Partido({
    title: "Partidaso lunes",
    date: '10/08/16',
    polla_partido: 400,
    polla_asado: 60,
    players_by_team: 2,
    players: []
  })

  partido.save(function(err){console.info(err)})*/

  app.listen(process.env.PORT || 3000, function(error){
    if (error) {
      console.info("hahahahahhaahaha GAME OVER")
    }
    else {
      console.info("listening in port hardcoded as 3000")
    }
  })

})
