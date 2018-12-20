import React from 'react';
import VolumeIcon from '../../icons/volume';
import './volume.css';

const Volume = props => (
  <button className="Volume">
    <div onClick={props.handleClickVolume}>
      <VolumeIcon size={25} color="white" isMuted={props.currentVolume}/>
    </div>
    <div className="Volume-range">
      <input
        type="range"
        min={0}
        max={1}
        step={.05}
        value={props.currentVolume}
        onChange={props.handleVolume}
      />
    </div>
  </button>
);

export default Volume;