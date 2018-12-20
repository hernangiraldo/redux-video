import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';

export default class VideoPlayer extends Component {
    state = {
        pause: false
    }

    handleToggleVideoClick = () => {
        this.setState({
            pause: !this.state.pause,
            duration: 0
        });

        this.state.pause ? this.video.play() : this.video.pause();
    }

    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        })
    }

    componentDidMount() {
        this.setState({
            pause: !this.props.autoplay
        })
    }

    setRef = element => {
        this.video = element;
    }

    render() {
        return (
            <VideoPlayerLayout>
                <Title title="Este es el titulo" />
                <PlayPause handleClick={this.handleToggleVideoClick} pause={this.state.pause} />
                <Video
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                    autoPlay={this.props.autoplay}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    pause={this.state.pause}
                    setRef={this.setRef}
                />
            </VideoPlayerLayout>
        )
    }
}