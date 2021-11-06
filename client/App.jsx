import React, { useState, useEffect } from 'react';
import Board from './components/Board.jsx';
import Settings from './components/Settings.jsx';
import './stylesheets/styles.scss';


function App() {
  // const [state, setState] = useState(initialState);
  const [allSounds, setAllSounds] = useState([]);
  const [preset, setPreset] = useState(""); // initialize to pokemon
  const [defaultPresets] = useState([
    'pokemon',
    'instruments',
    'gaffe'
  ]);
  
  // tables = ['all','/pokemon', '/instruments', '/gaffes']
  // /all route => grabbing all the presets just "cache"
  // subsequent routes just gives you a list of names under each category
  // this.state{
  //  all:{name: links}
  // pokemon : [pikachu,charmander...]
  // instruments : [drum...]
  // gaffes: [wahwah...]
  //}

  // useEffect is like componentDidMount componentDidUnmount
  useEffect(() => {
    //tables.forEach(table => {
    fetch('/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('This is our data =>', data.rows);
        setAllSounds(data.rows);
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
    </div>
  )

}


export default App;