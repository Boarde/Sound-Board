import React, { useState, useEffect } from 'react';
import SoundButton from './SoundButton.jsx';

const Board = (props) => {
  const allSoundButtons = [];
  const sounds = props.allSounds;

  // TESTING BUTTON RENDERING
  for (let i = 0; i < 10; i++) {
    allSoundButtons.push(<SoundButton sound={ sounds[i] } />)
  }
  // for (let sound of props.sound) {
  //   allSoundButtons.push(
  //     <SoundButton sound={sound} />
  //   )
  // }


  // return row components
  return (
    <div className="board-wrapper">
      { allSoundButtons }
    </div>
  )
}

export default Board;