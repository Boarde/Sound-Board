import React, { useState, useEffect } from 'react';
import Board from './components/Board.jsx';
import Preset_Selector from './components/Preset_Selector.jsx';
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
  // Saving username and password in States
  const [currUser, setCurrUser] = useState(null);
  const [password, setPassword] = useState('');

  const logOut = () => {
    setCurrUser(null);
  };

  const postLogIn = () => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userInfo: { username: currUser, password: password } })
    })
      .then(res => res.json())
      .then(data => {
        setCurrUser(currUser);
        setAllSounds(data);
        setDefaultPresets(Object.keys(data));
      })
      .catch(err => {
        console.log("Error logging in user", err);
      });
  };

  const postSignUp = () => {
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ allInfo: { username: currUser, password: password } })
      //const { username, password } = req.body.allInfo;
    })
      .then(res => {
        setCurrUser(currUser);
      })
      .catch(err => {
        console.log("Error sign up", err);
      });
  };

  return (
    //load user settings and render the board
    <div className="app-wrapper">
      {/* DISPLAYS GEAR FOR SETTINGS */}
      <button className="presetSettings" onClick={() => setMenuStatus(!menuStatus)}></button>
      {!currUser && <button id="login-form" onClick={() => setShowLogin(!showLogin)}></button>}

      {/* LOGIN BLOCK */}
      {(showLogin && !currUser) &&
        <div className="login-wrapper">
          <form>
            <div id="username-input" style={{ color: 'white' }}>Username: <input onChange={e => setCurrUser(e.target.value)} type="text" required></input></div>
            <div id="login-input" style={{ color: 'white' }}>Password: <input onChange={e => setPassword(e.target.value)} type="password" required></input></div>
            <div className="outer">
              <button className="login-button-click" onClick={e => {e.preventDefault();postLogIn();}}>Log In</button>
              <button className="login-button-click" onClick={postSignUp}>Sign Up</button>
            </div>
          </form>
        </div>
      }

      {/* LOG OUT BUTTON */}
      {currUser && <button id="log-out-button" onClick={logOut}></button>}

      {menuStatus && <Customizer currUser={currUser} setMenuStatus={setMenuStatus} allSounds={allSounds} />}
      {(!currUser && menuStatus) || <Preset_Selector defaultPresets={defaultPresets} setPreset={setPreset} />}
      {menuStatus || <Board preset={preset} allSounds={allSounds} />}
    </div>
  )

}


export default App;
