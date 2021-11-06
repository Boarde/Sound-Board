import React, { useState, useEffect } from 'react';

const SoundButton = (props) => {
  // console.log('SOUNDBUTTON RENDERED, CHECKING PROPS: ', props)
  

  const playSound = () => {
    console.log("CLICKED");
    let audio = new Audio(props.sound);
    console.log("AUDIO LINK: ", props.sound);
    audio.play()
  }
    //inside of onClick do something with event handler
    //this.props.onClick()
    return (
      <div className="button-wrapper">
        <button
        className="button-area"
        onClick={() => playSound()}
        >
        </button>
      </div>
        // onClick={() => /* play props.sound function */}>
        // {/* {this.props.value} */}
    )
}

export default SoundButton;