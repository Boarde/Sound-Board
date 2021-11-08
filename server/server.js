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

// app.get('/all', Controller.getPokemon, Controller.getInstruments, Controller.getGaffes, (req, res) => {
//   console.log('getting all the things'); 

//   return res.status(200).json({pokemon: res.locals.pokemon, instruments : res.locals.instruments, gaffes: res.locals.gaffes});
// });

app.get('/all', Controller.getALL, (req, res)=> {
  console.log('trying to create the same formatting as manually doing it')
  return res.status(200).json(res.locals.all)
})

app.get('/presets', Controller.getPresets, (req, res) => {
  console.log('got list of presets');
  return res.status(200).json(res.locals.presets);
});

app.post('/savePreset', Controller.savePreset, (req, res) => {
  console.log('sent preset to db');
  return res.sendStatus(200);
});

app.get('/login', Controller.login, (req, res) => {
  console.log('logged in');
  return res.sendStatus(200).json(loginStatus);
});

app.post('/signup', Controller.signup, (req, res) => {
  console.log('signed up new user');
  return res.sendStatus(200);
});

app.use('*', (req,res) => {
  console.log("not found");
  return res.sendStatus(404);
});


app.listen(PORT); //listens on port 3000 -> http://localhost:3000/
