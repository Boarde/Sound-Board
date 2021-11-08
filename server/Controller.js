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
      res.locals.instruments = data.rows;
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
      // console.log(data.rows)
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

// Controller.savePreset = (req, res, next) => {
  
//   req.body = ['Connor','charmander','whip','two_hours_later','xylophone','marimba','zither','gta','what_are_those','recorder','vulpix','fbi','ash_boogy'];
//   let qString =  'INSERT INTO presets VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)';
//   // qString += `'${arr.shift()}','`;
//   // qString = qString + arr.join('#') + ')';
//   console.log('trying to save......')
//   db.query(qString, req.body)
//     .then(data => {
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

Controller.getALL = (req, res, next) => {
  function formatData(SQL) {
    const obj ={}
    SQL.forEach((element) => {
      obj[element.presetname] = []
      const nameArray = element.names.split('#')
      const linkArray = element.links.split('#')
      const arrayObj = []
      for(let i =0; i< nameArray.length; i++) {
        const nameLink = {}
        nameLink.name = nameArray[i]
        nameLink.link = linkArray[i]
        arrayObj.push(nameLink)
      }
      obj[element.presetname] = arrayObj
    })
    return obj;
    //one object with 3 keys
      //each key has an array of objects
        //each object has a name and link key
  }
  let qString = `select presetsongs.presetName, STRING_AGG(presetsongs.sound, '#') AS names, STRING_AGG(soundLinks.link, '#') AS links from presetsongs
  Left Join soundlinks
  ON presetsongs.sound = soundLinks.sound
  Group BY presetsongs.presetName`
  console.log('trying to get all with the parse')
  db.query(qString)
    .then(data => {
      console.log('this is formatted ------->', formatData(data.rows));
      console.log('what is going on ??????????');
      res.locals.all = formatData(data.rows);
      return next();
    })
    .catch(err => {
      console.log('Error when trying to do the query for getting all')
      return next ({
        log: 'Error in the Controller.getAll',
        message: {err: 'Controller.getAll: Error'}
      })
    })
}

Controller.savePreset = (req, res, next) => {
  console.log('this is the post request body', req.body.newPreset);
  const testing = req.body.newPreset;
  let qString =  "Insert INTO presetSongs Values ($1, $2), ($1, $3), ($1, $4), ($1, $5), ($1, $6), ($1, $7), ($1, $8), ($1, $9), ($1, $10), ($1, $11), ($1, $12), ($1, $13);"
  // qString += `'${arr.shift()}','`;
  // qString = qString + arr.join('#') + ')';
  db.query(qString, testing)
    .then(() => {
      return next();
    })
    .catch(err => {
      console.log(err.message);
      return next({
        log: 'Error in Controller.savePreset',
        message: {err: 'Controller.savePreset'}
      });
    });
};

Controller.login = (req, res, next) => {
  console.log('this is the get request body', req.body.userInfo);
  const testing = req.body.userInfo;
  let qString =  ''; //grab user presets while matching for username/pw
  db.query(qString, testing)
    .then((data) => {
      res.locals.loginStatus = data.rows;
      return next();
    })
    .catch(err => {
      console.log(err.message);
      return next({
        log: 'Error in Controller.getGaffes',
        message: {err: 'Controller.getGaffes: Error'}
      });
    });
};
Controller.signup = (req, res, next) => {
  console.log('signing up', req.body.allInfo);
  const testing = req.body.allInfo;
  let qString =  ''//inserting username, pw, preset options
  db.query(qString, testing)
    .then(() => {
      return next();
    })
    .catch(err => {
      console.log(err.message);
      return next({
        log: 'Error in Controller.signup',
        message: {err: 'Controller.signup: Error' }
      });
    });
};


module.exports = Controller;
