import React, { useState, useEffect } from 'react';
import SoundButton from './SoundButton.jsx';

const Board = (props) => {
  const preset = props.preset;
  //we are initializing it to an empty array in case
  const sounds = props.allSounds[preset] || [
    {link: 'https://www.myinstants.com/media/sounds/overwatch-boop-sombra.mp3' },
    {link: 'https://www.pokezorworld.com/anime/wav/pikach.wav' },
    {link: 'https://quicksounds.com/uploads/tracks/155995082_386652093_1130616536.mp3' },
    {link: 'https://www.pokezorworld.com/anime/wav/whosthatpokemon.wav' },
    {link: 'https://quicksounds.com/uploads/tracks/1276474019_2059256748_1376796276.mp3' },
    {link: 'https://www.imit.org.uk/sound-clips/Whip.mp3' },
    {link: 'https://quicksounds.com/uploads/tracks/684591523_732065353_968365190.mp3' },
    {link: 'https://www.pokezorworld.com/anime/wav/charmander.wav' },
    {link: 'https://www.pokezorworld.com/anime/wav/machoke.wav' },
    {link: 'https://www.imit.org.uk/sound-clips/Organ.mp3' },
    {link: 'https://www.pokezorworld.com/anime/wav/bulbasaur.wav' },
    {link: 'https://www.pokezorworld.com/anime/wav/meowth.wav' }
  ];
      
  // 

  return (
    <div className="soundboard">
      {sounds.map((el, i) => <SoundButton id={i} key={i} sound={ sounds[i].link } />)}
    </div>
  );
};

export default Board;