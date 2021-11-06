const db = require('./database.js');

const Controller = {};

Controller.getAllClips = (req, res, next) => {
  const all =  'SELECT * FROM pokemon';

  db.query(all)
    //grabbing characters from the DB
    .then(data => {
      console.log(data.rows);
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


module.exports = Controller;