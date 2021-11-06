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
  
  console.log({pokemon: res.locals.pokemon, instruments : res.locals.instruments, gaffes: res.locals.gaffes});
  return res.status(200).json({pokemon: res.locals.pokemon, instruments : res.locals.instruments, gaffes: res.locals.gaffes});

  //res.locals.all = [ {name: 'name1', link: 'link1.wav'}, {name: 'name2', link: 'link2.wav'} ]
});


app.get('/presets', Controller.getPresets, (req, res) => {
  console.log('got list of presets');
  return res.status(200).json(res.locals.presets);
});

app.use('*', (req,res) => {
  console.log("not found");
  return res.sendStatus(404);
});


app.listen(PORT); //listens on port 3000 -> http://localhost:3000/
