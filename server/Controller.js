const db = require('./database.js');

const Controller = {};

Controller.getAllClips = (req, res, next) => {
  const qString =  'SELECT pokemon.name, pokemon.link FROM pokemon UNION SELECT gaffes.name, gaffes.link FROM gaffes UNION SELECT instruments.name, instruments.link FROM instruments';
  db.query(qString)
    //grabbing characters from the DB
    .then(data => {
      //console.log(data.rows);
      res.locals.allClips = data;
      return next();
    })
    .catch(err => {
      console.log("ERROR!!!");
      return next({
        log: 'Error in Controller.getAllClips',
        message: {err: 'Controller.getAllClips: Error'}
      });
    });
  };

Controller.getPokemon = (req, res, next) => {
  const qString =  'SELECT pokemon.name, pokemon.link FROM pokemon';

  db.query(qString)
    //grabbing characters from the DB
    .then(data => {
      res.locals.pokemon = data;
      return next();
    })
    .catch(err => {
      console.log("ERROR!!!");
      return next({
        log: 'Error in Controller.getPokemon',
        message: {err: 'Controller.getPokemon: Error'}
      });
    });
  };

Controller.getInstruments = (req, res, next) => {
  const qString =  'SELECT instruments.name, instruments.link FROM instruments';

  db.query(qString)
    //grabbing characters from the DB
    .then(data => {
      res.locals.instruments = data;
      return next();
    })
    .catch(err => {
      console.log("ERROR!!!");
      return next({
        log: 'Error in Controller.getInstruments',
        message: {err: 'Controller.getInstruments: Error'}
      });
    });
  }

Controller.getGaffes = (req, res, next) => {
  const qString =  'SELECT gaffes.name, gaffes.link FROM gaffes';

  db.query(qString)
    //grabbing characters from the DB
    .then(data => {
      res.locals.gaffes = data;
      return next();
    })
    .catch(err => {
      console.log("ERROR!!!");
      return next({
        log: 'Error in Controller.getGaffes',
        message: {err: 'Controller.getGaffes: Error'}
      });
    });
  };

// Controller.addCustom = (req, res, next) => {  
//   const clips = [];
//   const qString = 'INSERT INTO custom('
//   clips.forEach()
//   const qString = `INSERT INTO 
//   custom(name, preset_0,preset_1,preset_2,preset_3,preset_4,preset_5,preset_6,preset_7,preset_8) VALUES ()
  
//   db.query(qString)
//   //grabbing characters from the DB
//   .then(data => {
//     console.log(data.rows);
//     res.locals.allClips = data;
//     return next();
//   })
//   .catch(err => {
//     console.log("ERROR!!!");
//     return next({
//       log: 'Error in Controller.getGaffes',
//       message: {err: 'Controller.getGaffes: Error'}
//     });
//   });
// };


module.exports = Controller;
