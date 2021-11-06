import React, { useState, useEffect } from 'react';

const SoundButton = (props) => {
  // console.log('SOUNDBUTTON RENDERED, CHECKING PROPS: ', props)

  const start = () => {
    console.log("CLICKED");
    let audio = new Audio(props.sound.link);
    console.log("AUDIO LINK: ", props.sound.link);
    audio.play()
  }
    //inside of onClick do something with event handler
    //this.props.onClick()
    return (
      <div className="soundButtonWrapper">
        <button
        className="square"
        onClick={() => start()}
        >
        CLICK ME
        </button>
      </div>
        // onClick={() => /* play props.sound function */}>
        // {/* {this.props.value} */}
    )
}

export default SoundButton;