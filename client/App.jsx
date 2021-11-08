import React, { useState, useEffect } from 'react';
import Board from './components/Board.jsx';
import Settings from './components/Settings.jsx';
import Customizer from './components/Customizer.jsx'
import './stylesheets/styles.scss';


function App() {
  // const [state, setState] = useState(initialState);
  const [allSounds, setAllSounds] = useState([]);
  const [preset, setPreset] = useState('pokemon'); // initialize to pokemon
  const [menuStatus, setMenuStatus] = useState(false);
  const [menu, setMenu] = useState(<div>
    <Board preset={ preset } allSounds={ allSounds } />
    <Settings defaultPresets={ defaultPresets } setPreset={ setPreset } />
    </div>
    ); //sets default page to soundboard
  const [defaultPresets, setDefaultPresets] = useState([]);
  
  // useEffect is like componentDidMount componentDidUnmount
  useEffect(() => {
    fetch('/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
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
      <button id="presetSettings"onClick= {()=> setMenuStatus(!menuStatus)}><span>Customize</span></button>
      { menuStatus && <Customizer setMenuStatus={ setMenuStatus } allSounds={ allSounds }/>}
      { menuStatus || <Settings defaultPresets={ defaultPresets } setPreset={ setPreset }/>}
      { menuStatus || <Board preset={ preset } allSounds={ allSounds }/>}
    </div>
  )

}


export default App;