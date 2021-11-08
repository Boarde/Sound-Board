import React, { useState, useEffect } from 'react';
import Board from './components/Board.jsx';
import Settings from './components/Settings.jsx';
import Customizer from './components/Customizer.jsx'
import './stylesheets/styles.scss';


function App() {
  // const [state, setState] = useState(initialState);
  const [allSounds, setAllSounds] = useState([]);
  const [preset, setPreset] = useState('pokemon'); // initialize to pokemon
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
        console.log('This is our data =>', data);
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
      <Settings defaultPresets={ defaultPresets } setPreset={ setPreset } />
      <Board preset={ preset } allSounds={ allSounds } />
      <Customizer allSounds={ allSounds } />
    </div>
    //customizer will go here
    //<div className="customizer">
    // <Customizer allSounds= {allSounds}>
    // </div>
  )

}


export default App;