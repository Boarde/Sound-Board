import React, { useState, useEffect } from 'react';

const soundButton = (props) => {

  let audio = new Audio("/christmas.mp3")

  const start = () => {
    audio.play()
  }
    //inside of onClick do something with event handler
    //this.props.onClick()
    return (
        <button
        className="square"
        onClick={() => /* play props.sound function */}>
        {/* {this.props.value} */}
        </button>
    )
}

export default SoundButton;