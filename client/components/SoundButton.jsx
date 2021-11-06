import React, { useState, useEffect } from 'react';

const SoundButton = (props) => {
  // console.log('SOUNDBUTTON RENDERED, CHECKING PROPS: ', props)

  let audio = new Audio("/christmas.mp3");

  const start = () => {
    audio.play();
  }
    //inside of onClick do something with event handler
    //this.props.onClick()
    return (
      <div className="button-wrapper">
        <button
        className="button-area"
        onClick={() => playSound()}
        >
        CLICK ME
        </button>
      </div>
        // onClick={() => /* play props.sound function */}>
        // {/* {this.props.value} */}
    )
}

export default SoundButton;