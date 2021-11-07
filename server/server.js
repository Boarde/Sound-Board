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

  return res.status(200).json({pokemon: res.locals.pokemon, instruments : res.locals.instruments, gaffes: res.locals.gaffes});
});


app.get('/presets', Controller.getPresets, (req, res) => {
  console.log('got list of presets');
  return res.status(200).json(res.locals.presets);
});

app.post('/savePreset', Controller.savePreset, (req, res) => {
  console.log('sent preset to db');
  return res.sendStatus(200);
});


app.use('*', (req,res) => {
  console.log("not found");
  return res.sendStatus(404);
});


app.listen(PORT); //listens on port 3000 -> http://localhost:3000/
