const express = require('express');
const app = express();
const path = require('path');
const Controller = require('./Controller');

const PORT = 3000;

app.use(express.json());

// allowing pages to show statically
// app.get(express.static('client'));

//getting homepage
app.get('/', (req, res) => {
  console.log("server - root");
  return res.status(200).sendFile(path.resolve(__dirname + '/index.html'));
});

app.get('/all', Controller.getPokemon, Controller.getInstruments, Controller.getGaffes, (req, res) => {
  console.log('getting all the things');
  
  return res.status(200).json({pokemon: res.locals.pokemon.rows, instruments : res.locals.instruments.rows, gaffes: res.locals.gaffes.rows});

  //res.locals.all = [ {name: 'name1', link: 'link1.wav'}, {name: 'name2', link: 'link2.wav'} ]
});

app.use('*', (req,res) => {
  console.log("not found");
  return res.sendStatus(404);
});





app.listen(PORT); //listens on port 3000 -> http://localhost:3000/
