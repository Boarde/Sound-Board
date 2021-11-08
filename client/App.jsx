import React, { useState, useEffect } from 'react';
import Board from './components/Board.jsx';
import Settings from './components/Settings.jsx';
import Customizer from './components/Customizer.jsx'
import LogIn from './components/LogIn.jsx';

import './stylesheets/styles.scss';


function App() {
  // STATE FOR ALL SOUNDS
  const [allSounds, setAllSounds] = useState([]);
  // STATE FOR PRESETS
  const [preset, setPreset] = useState('pokemon');
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
  
  // useEffect is like componentDidMount componentDidUnmount
  useEffect(() => {
    fetch('/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: currUser })
    })
      .then(res => res.json())
      .then(data => {
        setAllSounds(data);
        setDefaultPresets(Object.keys(data))
      })
      .catch(err => {
        console.log("Error fetching request from back end", err);
      });
  }, []);

  return (
    //load user settings and render the board
    <div className="app-wrapper">
      <button className="presetSettings"onClick= {()=> setMenuStatus(!menuStatus)}></button>
      { !loggedIn && <button id="login-button" onClick= {() => setShowLogin(!showLogin)}></button> }
      { (showLogin && !loggedIn) && <LogIn setCurrUser={ setCurrUser } setLoggedIn={ setLoggedIn }  /> }
      { loggedIn && <button id='log-out-button' onClick={ () => setCurrUser(null) }>Log Out</button> }
      { menuStatus && <Customizer currUser={ currUser } setMenuStatus={ setMenuStatus } allSounds={ allSounds }/> }
      { menuStatus || <Settings defaultPresets={ defaultPresets } setPreset={ setPreset }/> }
      { menuStatus || <Board preset={ preset } allSounds={ allSounds }/> }
    </div>
  )

}


export default App;