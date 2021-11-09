import React, { useState, useEffect } from 'react';
import SoundButton from './SoundButton.jsx';

const Board = (props) => {
  const preset = props.preset;
  //we are initializing it to an empty array in case
  const sounds = props.allSounds[preset] || [];
  // defaults any empty slots to 'boop'
  const defaultSound = 'https://www.myinstants.com/media/sounds/overwatch-boop-sombra.mp3';
    
  // 
  const renderBoard = () => {
    const soundboard = [];
    for (let i = 0; i < 12; i++) {
      if (sounds[i] !== undefined) {
        soundboard.push(<SoundButton id={i} key={i} sound={ sounds[i].link } />);
      } else {
        soundboard.push(<SoundButton id={i} key={i} sound={ defaultSound } />);
      }
    }
    return soundboard;
  };
 
  return (
    <div className="soundboard">
      { renderBoard() }
    </div>
  );
};

export default Board;