import React, { useState, useEffect } from 'react';

const Settings = (props) => {

  // please implement preset clips in this format; 
  // clips = [name, preset1..., preset9];
  
  return (
    <div className="settings-wrapper">
      <select onChange={e => props.setPreset(e.value) }>
        { props.defaultPresets.map((preset) => {
          <option value={ preset }>{ preset }</option>
        }) }
      </select>
    </div>
  )
}

export default Settings;