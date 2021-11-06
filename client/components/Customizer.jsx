import React, { useState, useEffect } from 'react';

const Customizer = (props) => {

  const currentSounds = [];
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
    <option key={i} value={element}> { element } </option>
  ));
    console.log('FORM ELEMENTS ', formElements);


  // POST FETCH REQUEST
  const addPreset = () => {
    
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
      // body: {
        
      // }
    })
      .then(res => res.json())
      .catch(err => {
        console.log('ERROR CREATING NEW PRESET');
        return err;
      })

  }

  const presetOptions = [];
  for (let i = 0; i < 12; i++) {
    presetOptions.push(
      <select id={`${i}dropdown`} name="soundClips">
        { formElements }
      </select>
    )
  }
  const preset = [
    {
      "presetname": "chang",
      "list": "pikachu#why_are_you_running#triangle#bulbasaur#recorder#vulpix#fbi#ash_boogy#hellno#wow"
    },
    {
      "presetname": "eddy",
      "list": "why_are_you_running#machoke#triangle#meowth#you_what#ratchet#angklung#raichu#csgo#wahwahwah#bulbasaur#organ"
    }
  ]

  // parse list:
  const listOfPresets = [];
  preset.forEach(el => {
    listOfPresets.push([el.presetname, ...el.list.split("#")])
  });

  // list.splist 
  // preset.list.split('#');
  // this.state = {
  //  currentPreset = preset.presetname;
  //  currentList = preset.list;

  // [name, soundName1, soundName2...]
  
  return (
    <form onSubmit={ (e) => { 
      e.preventDefault();
      console.log('FORM SUBMITTED', e) 
    }}>
      <label htmlFor="preset-name" style={{color: "white"}}>Preset Name:     </label>
      <input id="preset-name" type="text" required></input>
      { presetOptions }
      <input type="submit"></input>
    </form>
    // GET NAME OF PRESET
    // SEND NEW PRESET IN FORMAT OF  [preset-name, name-of-sound...]
  )
}

export default Customizer;