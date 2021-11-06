import React, { useState, useEffect } from 'react';
import SoundButton from './SoundButton.jsx';

const Board = (props) => {
  const allSoundButtons = [];

  // TESTING BUTTON RENDERING
  for (let i = 0; i < 9; i++) {
    allSoundButtons.push(<SoundButton />)
  }
  // for (let sound of props.sound) {
  //   allSoundButtons.push(
  //     <SoundButton sound={sound} />
  //   )
  // }


  // return row components
  return (
    <div className="button-wrapper">
      { allSoundButtons }
    </div>
  )
}

export default Board;