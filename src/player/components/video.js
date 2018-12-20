import React, { Component } from 'react';
import './video.css';

export default class Video extends Component {
    render() {
        const { handleLoadedMetadata } = this.props;
        return (
            <div className="Video">
                <video
                    autoPlay={this.props.autoPlay}
                    src={this.props.src}
                    ref={this.props.setRef}
                    onLoadMetadate={handleLoadedMetadata}
                />
            </div>
        )
    }
}