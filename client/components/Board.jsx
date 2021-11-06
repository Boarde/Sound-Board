import React, { useState, useEffect } from 'react';
import SoundButton from './SoundButton.jsx';

const Board = (props) => {
  const allSoundButtons = [];
  const preset = props.preset;
  const sounds = props.allSounds[preset];
  console.log('THIS IS THE SOUND FROM PRESET, ', sounds);
  const defaultSound = 'https://www.myinstants.com/media/sounds/overwatch-boop-sombra.mp3';

  // CONDITIONAL LOGIC TO CHANGE BUTTONS RENDERED DEPENDING ON PRESET
  // PRESET CHANGES HAPPEN IN SETTINGS.JSX
  
  // TESTING BUTTON RENDERING
  // for (let i = 0; i < sounds; i++) {
  //   if (sounds[i] !== undefined) {
  //     allSoundButtons.push(<SoundButton id={i} key={i} sound={ sounds[i].link } />)
  //   } else {
  //     // allSoundButtons.push(<SoundButton id={i} key={i} sound={  } />)
  //   }
  // }
 
  return (
    <div className="board">
      { allSoundButtons }
    </div>
  )
}

export default Board;