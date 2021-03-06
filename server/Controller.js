const db = require('./database.js');
const bcrypt = require ('bcryptjs');

const Controller = {};

Controller.getALL = (req, res, next) => {
  console.log(req.body);
  console.log('currently in the controller getALL');
  function formatData(SQL) {
    const obj ={}
    SQL.forEach((element) => {
      //Does Element have both a .name and .names property? what is the difference?
      obj[element.name] = []
      const nameArray = element.names.split('#')
      const linkArray = element.links.split('#')
      const arrayObj = []
      for(let i =0; i< nameArray.length; i++) {
        const nameLink = {}
        nameLink.name = nameArray[i]
        nameLink.link = linkArray[i]
        // { name: 'pikachu', link: 'pikachu.wav'}
        arrayObj.push(nameLink)
      }
      obj[element.name] = arrayObj // obj[element.name] = [{ name: 'pikachu', link: 'pikachu.wav'},{ name: 'pikachu', link: 'pikachu.wav'},...]
    })
    return obj;
    //one object with all users presets
      //each key has an array of objects
        //each object has a name and link key
  }
  console.log('is the req.body showing', req.body.newPreset);
  let username;
  if (req.body.userInfo) username = [req.body.userInfo.username]
  else username = [req.body.newPreset[13]]
  console.log('is the req.body showing', req.body.newPreset);
  console.log('this is the username in an array-------->', username)
  // what does this query do
  let qString = "select presets.name, STRING_AGG(presetsongs.sound, '#') AS names, STRING_AGG(soundLinks.link, '#') AS links from presets Join presetsongs ON presets.name = presetsongs.presetName Join soundlinks ON presetsongs.sound = soundLinks.sound WHERE presetsongs.username = $1 OR presetsongs.username IS NULL Group BY presets.name"
  console.log('trying to get all with the parse')
  db.query(qString, username)
    .then(data => {
      //console.log(data.rows)
      res.locals.all = formatData(data.rows);
      //console.log(res.locals.all); -- front end NEEDS this format.
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

// what exactly does this do -- what greater purpose does it serve?
Controller.savePrimary = (req, res, next) => {
  //unable to do multiple queries at the same time so I need to create
  //the primary key in the preset table for better username usage
  const testing = req.body.newPreset
  // why these index positions
  // index 0 is preset name
  // index 14 is username
  const names = [testing[0], testing[13]]
  let qString = "Insert INTO presets (name, username) Values ($1, $2)";
  db.query(qString, names)
    .then(() => {
      return next();
    })
    .catch(err => {
      console.log(err.message);
      return next({
        log: 'Error in Controller.savePrimary',
        message: {err: 'Controller.savePrimary'}
      });
    });
}
Controller.savePreset = (req, res, next) => {
  const testing = req.body.newPreset;
  // what are values $1 and $14
  // $1 = presetName
  // $2 - $13 soundbyte names
  // $14 = userName
  let qString =  "Insert INTO presetSongs Values ($1, $2, $14), ($1, $3, $14), ($1, $4, $14), ($1, $5, $14), ($1, $6, $14), ($1, $7, $14), ($1, $8, $14), ($1, $9, $14), ($1, $10, $14), ($1, $11, $14), ($1, $12, $14), ($1, $13, $14);"
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


// how much of this works?
Controller.login = (req, res, next) => {
  console.log('this is the post request body', req.body.userInfo);
  const { username, password } = req.body.userInfo;
  console.log({'username': username, 'password':password});
  let qString =  'select * from users Where name = $1 AND password = $2'; //grab user presets while matching for username/pw
  const hash = bcrypt.hashSync(password, 2);
  console.log(hash);
  db.query(qString, [username, hash])
    .then((data) => {
      // did we grab the users presets? where do we return them?
      res.locals.loginStatus = true;
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

// have we seen this work?
// seems solid
Controller.signup = (req, res, next) => {
  console.log('this is the post request body', req.body.allInfo);
  const { username, password } = req.body.allInfo;
  console.log(req.body.allInfo);
  let qString =  "Insert INTO users (name, password) Values ($1, $2);" //inserting username, pw, preset options
  const hash = bcrypt.hashSync(password, 2);
  db.query(qString, [username, hash])
    .then(() => {
      return next();
    })
    .catch(err => {
      console.log(err.message);
      return next({
        log: 'Error in Controller.signup',
        message: {err: 'Controller.signup: Error'}
      });
    });
};


module.exports = Controller;