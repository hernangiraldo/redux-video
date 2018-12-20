import React, { Component } from 'react';
import './video.css';

export default class Video extends Component {
    render() {
        const {
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeeking,
            handleSeeked
        } = this.props;
        return (
            <div className="Video">
                <video
                    autoPlay={this.props.autoPlay}
                    src={this.props.src}
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate}
                    onSeeking={handleSeeking}
                    onSeeked={handleSeeked}
                />
            </div>
        )
    }
}