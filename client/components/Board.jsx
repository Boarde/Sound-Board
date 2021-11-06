import React, { useState, useEffect } from 'react';
import SoundButton from './components/SoundButton';

const Board = (props) => {
  const allSoundButtons = [];
  
  for (let sound of props.sound) {
    allSoundButtons.push(
      <SoundButton sound={sound} />
    )
  }


  // return row components
}

export default Board;