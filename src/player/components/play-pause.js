import React from 'react';
import Play from '../../icons/play';
import Pause from '../../icons/pause';

const PlayPause = ({handleClick, pause}) => (
    <div className="PlayPause">
    {
        pause ?
        <button onClick={handleClick}>
            <Play size={25} color="white" />
        </button>
        :
        <button onClick={handleClick}>
            <Pause size={25} color="white" />
        </button>
    }
    </div>
);

export default PlayPause;