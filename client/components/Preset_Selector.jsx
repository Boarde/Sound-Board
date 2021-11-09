import React, { useState, useEffect } from 'react';

const Preset_Selector = (props) => {
  // POPULATING OPTIONS DROPDOWN
  const options = props.defaultPresets.map((preset, i) => {
    return <option key={i} value={preset}> {preset} </option>;
  });

  return (
    <div className="settings-wrapper" >
      <select onChange={e => props.setPreset(e.target.value)}>
        {options}
      </select>
    </div>
  );
};

export default Preset_Selector;