import React, { useState, useEffect } from 'react';
import Board from './components/Board.jsx';
import Settings from './components/Settings.jsx';
import Customizer from './components/Customizer.jsx'

import './stylesheets/styles.scss';


function App() {
  // STATE FOR ALL SOUNDS
  const [allSounds, setAllSounds] = useState([]);
  // STATE FOR PRESETS
  const [preset, setPreset] = useState('gaffes');
  // STATE FOR CONDITIONAL RENDERING BOARD VS MENU
  const [menuStatus, setMenuStatus] = useState(false);
  // STATE FOR DEFAULT PRESETS ON PAGE LOAD
  const [defaultPresets, setDefaultPresets] = useState([]);
  // STATE FOR SHOWING LOGIN FORM 
  const [showLogin, setShowLogin] = useState(false);
  // STATE FOR USER LOGGED IN STATUS
  const [loggedIn, setLoggedIn] = useState(false);
  // STATE FOR LOGGED IN USER
  const [currUser, setCurrUser] = useState(null);
  // STATE FOR USERNAME
  const [username, setUsername] = useState('');
  // STATE FOR PASSWORD
  const [password, setPassword] = useState('');

  // we know she should have had another component, but quick fix solution
  const loginBlock = [
    <div className="login-wrapper">
      <form>
        <div id="username-input" style={{ color: 'white' }}>Username: <input onChange={e => setUsername(e.target.value)} type="text" required></input></div>
        <div id="login-input" style={{ color: 'white' }}>Password: <input onChange={e => setPassword(e.target.value)} type="password" required></input></div>
        <div className="outer">
          <button className="login-button-click" onClick={e => {
            e.preventDefault();
            postLogIn();
          }}>Log In</button>
          <button className="login-button-click" onClick={postSignUp}>Sign Up</button>
        </div>
      </form>
    </div>
  ];


  // useEffect is like componentDidMount componentDidUnmount
  useEffect(() => {
    fetch('/all', {
      method: 'POST', // CHANGE TO POST -> CHANGE SERVER ROUTES -> CHANGE HOW CONTROLLER HANDLES REQ.BODY
      headers: {     //
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: currUser })
    })
      .then(res => res.json())
      .then(data => {
        setAllSounds(data);
        setDefaultPresets(Object.keys(data));
      })
      .catch(err => {
        console.log("Error fetching request from back end", err);
      });
  }, []);

  const logOut = () => {
    setLoggedIn(false);
    setCurrUser(null);
  }

  const postLogIn = () => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ allInfo: { username: username, password: password } })
    })
      .then(res => {
        setLoggedIn(true);
        setCurrUser(username);
      })
      .catch(err => {
        console.log("Error logging in user", err);
      });
  }

  const postSignUp = () => {
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ allInfo: { username: username, password: password } })
      //const { username, password } = req.body.allInfo;
    })
      .then(res => {
        setLoggedIn(true);
        setCurrUser(username);
      })
      .catch(err => {
        console.log("Error sign up", err);
      });
  }

  return (
    //load user settings and render the board
    <div className="app-wrapper">
      {/* DISPLAYS GEAR FOR SETTINGS */}
      <button className="presetSettings" onClick={() => setMenuStatus(!menuStatus)}></button>
      {!loggedIn && <button id="login-form" onClick={() => setShowLogin(!showLogin)}></button>}

      {/* LOGIN BLOCK */}
      {(showLogin && !loggedIn) &&
        <div className="login-wrapper">
          <form>
            <div id="username-input" style={{ color: 'white' }}>Username: <input onChange={e => setUsername(e.target.value)} type="text" required></input></div>
            <div id="login-input" style={{ color: 'white' }}>Password: <input onChange={e => setPassword(e.target.value)} type="password" required></input></div>
            <div className="outer">
              <button className="login-button-click" onClick={e => {
                e.preventDefault();
                postLogIn();
              }}>Log In</button>
              <button className="login-button-click" onClick={postSignUp}>Sign Up</button>
            </div>
          </form>
        </div>
      }

      {/* LOG OUT BUTTON */}
      {loggedIn && <button id="log-out-button" onClick={logOut}></button>}

      {menuStatus && <Customizer currUser={currUser} setMenuStatus={setMenuStatus} allSounds={allSounds} />}
      {menuStatus || <Settings defaultPresets={defaultPresets} setPreset={setPreset} />}
      {menuStatus || <Board preset={preset} allSounds={allSounds} />}
    </div>
  )

}


export default App;