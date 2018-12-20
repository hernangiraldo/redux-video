import React from 'react';
import PropTypes from 'prop-types';
import './playlist.css'
import Media from './../media/media';

export default function Playlist(props) {
  return (
    <div className="Playlist">
      {
        props.playlist.map( m => {
          return <Media {...m} key={m.id} openModal={props.handleClick}/>
        })
      }
    </div>
  )
}

Playlist.propTypes = {
  data: PropTypes.object
}