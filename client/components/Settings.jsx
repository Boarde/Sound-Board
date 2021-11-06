import React, { useState, useEffect } from 'react';

const Settings = (props) => {
  console.log('SETTINGS PROPS', props.defaultPresets);

  // POPULATING OPTIONS DROPDOWN
  const options = props.defaultPresets.map((preset, i) => {
    return <option key={ i }> { preset } </option>
  });
  
  return (
    <div className="settings-wrapper">
      <select onChange={e => props.setPreset(e.target.value) }>
        { options }
      </select>
    </div>
  )
}

export default Settings;