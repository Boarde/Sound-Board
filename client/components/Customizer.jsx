import React, { useState, useEffect } from 'react';

const Customizer = (props) => {
  const [newPreset, setNewPreset] = useState({
    0:"boop",
    1:"boop",
    2:"boop",
    3:"boop",
    4:"boop",
    5:"boop",
    6:"boop",
    7:"boop",
    8:"boop",
    9:"boop",
    10:"boop",
    11:"boop",
    });
  const [presetName, setPresetName] = useState('');

  let databaseEntry = "";

//SHIT TROLL
  const currentSounds = [];
  console.log('please get lucky', props.allSounds)
  const soundsArray = () => {
    Object.keys(props.allSounds).forEach(element => {
      for (let i = 0; i < props.allSounds[element].length; i++) {
        currentSounds.push(props.allSounds[element][i].name)
      }
     }
    )
  }
  console.log('CUSTOMIZER currentSounds', currentSounds);

  soundsArray();
  //console.log(currentSounds)
  const formElements = currentSounds.map((element, i) => (
    <option key={`${i}`} value={element}> { element } </option>
  ));



  // POST FETCH REQUEST
  //Instead we should submit an array with the ...Object.values(newPreset) AND the links right here) 
  const addPreset = () => {
    databaseEntry = [presetName, ...Object.values(newPreset)];
    console.log('databaseentry',databaseEntry);
    fetch('/savePreset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newPreset: [presetName, ...Object.values(newPreset)]})
        
      // }
    })
      .then(res => res.json())
      .catch(err => {
        console.log('ERROR CREATING NEW PRESET');
        return err;
      })

  }

  function handleChange(i, e) {

    const selectedPreset = JSON.parse(JSON.stringify(newPreset));
    selectedPreset[i] = e.target.value;
    setNewPreset(selectedPreset);
  };



  const presetOptions = [];
  for (let i = 0; i < 12; i++) {
    presetOptions.push(
      <select onChange={ e => handleChange(i, e) } id={`${i}dropdown`} name="soundClips">
        { formElements }
      </select>
    )
  }
  
  return (
    <form onSubmit={ (e) => {
      e.preventDefault();
      addPreset();
    }}>
      <label htmlFor="preset-name" style={{color: "white"}}>Preset Name:     </label>
      <input onChange={ (e) => setPresetName(e.target.value) } id="preset-name" type="text" required></input>
      { presetOptions }
      <input type="submit"></input>
    </form>
    // GET NAME OF PRESET
    // SEND NEW PRESET IN FORMAT OF  [preset-name, name-of-sound...]
  )
}

export default Customizer;