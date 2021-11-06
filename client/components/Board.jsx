import React, { useState, useEffect } from 'react';
import SoundButton from './SoundButton.jsx';

const Board = (props) => {
  const allSoundButtons = [];
  const sounds = props.allSounds;
  const preset = props.preset;

  // CONDITIONAL LOGIC TO CHANGE BUTTONS RENDERED DEPENDING ON PRESET
  // PRESET CHANGES HAPPEN IN SETTINGS.JSX
  
  // TESTING BUTTON RENDERING
  for (let i = 0; i < 12; i++) {
    if (sounds[i] !== undefined) {
      allSoundButtons.push(<SoundButton id={i} key={i} sound={ sounds[i] } />)
    } else {
      // allSoundButtons.push(<SoundButton id={i} key={i} sound={  } />)
    }
  }
  // for (let sound of props.sound) {
  //   allSoundButtons.push(
  //     <SoundButton sound={sound} />
  //   )
  // }

  /**
   * this.state = {
   *  choices = [pikachu, blah, blah, blah]
   * }
   * 
   * changeChoices (
   * ) -> grab
   * 
   */

  // return row components
  return (
    <div className="board">
      { allSoundButtons }
    </div>
  )
}

export default Board;