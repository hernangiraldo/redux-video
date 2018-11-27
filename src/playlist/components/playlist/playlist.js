import React from 'react';
import PropTypes from 'prop-types';
import './playlist.css'
import Media from './../media/media';
import Play from '../../../icons/components/play';
import FullScreen from '../../../icons/components/full-screen';
import Pause from '../../../icons/components/pause';
import Volume from '../../../icons/components/volume';

export default function Playlist(props) {
  const playlist = props.data.categories[0].playlist;
  return (
    <div className="Playlist">
    <Play size={50} color="red" />
    <FullScreen size={50} color="red" />
    <Volume size={50} color="red" />
    <Pause size={50} color="red" />
      {
        playlist.map( m => {
          return <Media {...m} key={m.id} />
        })
      }
    </div>
  )
}

Playlist.propTypes = {
  data: PropTypes.object
}