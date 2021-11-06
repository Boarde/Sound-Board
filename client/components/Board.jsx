import React, { useState, useEffect } from 'react';
import SoundButton from './SoundButton.jsx';

const Board = (props) => {
  const allSoundButtons = [];
  const preset = props.preset;
  console.log('PRESET CHANGED', preset)
  //because of an issue where props.allSounds is rendering after the sounds constant is initialized
  //we are initializing it to an empty array in case
  const sounds = props.allSounds[preset] || [];
  console.log('THIS IS THE SOUND FROM PRESET, ', sounds);
  const defaultSound = 'https://www.myinstants.com/media/sounds/overwatch-boop-sombra.mp3';

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