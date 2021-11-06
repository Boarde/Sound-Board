const db = require('./database.js');

const Controller = {};

Controller.getPokemon = (req, res, next) => {
  const qString =  'SELECT pokemon.name, pokemon.link FROM pokemon';

  db.query(qString)
    //grabbing characters from the DB
    .then(data => {

      //console.log(data.rows);
      res.locals.pokemon = data.rows;
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
      res.locals.intruments = data.rows;
      return next();
    })
    .catch(err => {
      console.log("ERROR!!!");
      return next({
        log: 'Error in Controller.getInstruments',
        message: {err: 'Controller.getInstruments: Error'}
      });
    });
};

Controller.getGaffes = (req, res, next) => {
  const qString =  'SELECT gaffes.name, gaffes.link FROM gaffes';

  db.query(qString)
    //grabbing characters from the DB
    .then(data => {
      res.locals.gaffes = data.rows;
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

Controller.getPresets = (req, res, next) => {
  const qString =  'SELECT presets.presetname, presets.list FROM presets';

  db.query(qString)
    //grabbing characters from the DB
    .then(data => {
      res.locals.gaffes = data.rows;
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

// Controller.sendNewPresets = (req, res, next) => {
//   const qString = '';
//   db.query(qString)
//     //grabbing characters from the DB
//     .then(data => 

//       return next();
//     })
//     .catch(err => {
//       console.log("ERROR!!!");
//       return next({
//         log: 'Error in Controller.getGaffes',
//         message: {err: 'Controller.getGaffes: Error'}
//       });
//     });
// };



module.exports = Controller;
