import React, { useState, useEffect } from 'react';
import Board from './components/Board.jsx';
import Playlist_Selector from './components/Playlist_Selector.jsx';
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
  // Saves our current username if logged in
  const [currUser, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  // logout function that will reset 
  const logOut = () => {
    setUsername(null);
  };

  const loginPrompt = [
    <div key="login" className="login-wrapper">
      <form>
        <div id="username-input">Username: <input onChange={e => setUsername(e.target.value)} type="text" required></input></div>
        <div id="login-input">Password: <input onChange={e => setPassword(e.target.value)} type="password" required></input></div>  
        <div className="outer">
          <button className="login-button-click" onClick={e => {e.preventDefault(); console.log("logging in", password, currUser)}}>Log In</button>
          <button className="login-button-click" onClick={() => console.log('signing in', password, currUser)}>Sign Up</button>
        </div>
      </form>
    </div>
  ];

  return (
    //load user settings and render the board
    <div className="app-wrapper">
      {/* Displays gear that takes user to change presets */}
      <button className="presetSettings" onClick={() => setMenuStatus(!menuStatus)}></button>

      {/* Displays login icon and stays active while user is not logged in */}
      {!currUser && <button id="login-form" onClick={() => setShowLogin(!showLogin)}></button>}

      {/* Generates login page */}
      {loginPrompt}

      {/* Displays log out icon when user is logged in */}
      {currUser && <button id="log-out-button" onClick={logOut}></button>}

      {/* Displays customizer page allowing creation of new presets */}
      {menuStatus && <Customizer currUser={currUser} setMenuStatus={setMenuStatus} allSounds={allSounds} />}

      {/* Generates preset list selector dropdown to allow quick switch between user presets if button is pressed*/}
      {menuStatus || <Preset_Selector defaultPresets={defaultPresets} setPreset={setPreset} />}

      {/* When preset selector is not activated, will generate the 3x4 soundboard*/}
      {menuStatus || <Board preset={preset} allSounds={allSounds} />}
    </div>
  );
}


export default App;