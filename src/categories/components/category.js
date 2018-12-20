import React from 'react';
import Playlist from '../../playlist/components/playlist/playlist';
import './category.css'

function Category(props) {
    return(
        <div className="Category">
            <p className="Category-description">{props.description}</p>
            <h2 className="Category-title">{props.title}</h2>
            <Playlist key={props.id} playlist={props.playlist} handleClick={props.handleClick} />
        </div>
    );
}

export default Category;