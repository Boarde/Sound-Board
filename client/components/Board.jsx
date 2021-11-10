import React, { useState, useEffect } from 'react';
import SoundButton from './SoundButton.jsx';


const Board = (props) => {
  const allSoundButtons = [];
  const defaultPresets = props.defaultPresets;
  console.log('this console.logs after an option is chosen within the dropdown', defaultPresets)
  // console.log('PRESET CHANGED', preset)
  //because of an issue where props.allSounds is rendering after the sounds constant is initialized
  //we are initializing it to an empty array in case
  console.log('props---->', props)
  console.log('before props console log---->', props.allSounds)
  const sounds = props.allSounds || [];
  // console.log('THIS IS THE SOUND FROM PRESET, ', sounds);
  const defaultSound = 'https://www.myinstants.com/media/sounds/overwatch-boop-sombra.mp3';
  console.log('after props console log---->', props.allSounds[props.preset])
  // CONDITIONAL LOGIC TO CHANGE BUTTONS RENDERED DEPENDING ON PRESET
  // PRESET CHANGES HAPPEN IN SETTINGS.JSX
  
  // TESTING BUTTON RENDERING
  const renderButtons = () => {
    for (let i = 0; i < 12; i++) {
      if (sounds[i] !== undefined) {
        allSoundButtons.push(<SoundButton id={i} key={i} sound={ sounds[i].link } />)
      } else {
        allSoundButtons.push(<SoundButton id={i} key={i} sound={ defaultSound } />)
      }
    }
  }
  renderButtons();
 
  return (
    <div className="board">
      { allSoundButtons }
    </div>
  )
}

export default Board;