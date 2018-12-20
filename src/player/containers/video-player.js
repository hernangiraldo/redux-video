import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import { formatedTime } from '../../utils/utils';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';
import { ID } from 'webpack/lib/ModuleFilenameHelpers';

export default class VideoPlayer extends Component {
    state = {
        pause: false,
        duration: 0,
        currentTime: 0,
        loading: false,
        currentVolume: 1,
        lastStateVolume: 0
    }

    handleToggleVideoClick = () => {
        this.setState({
            pause: !this.state.pause
        });

        this.state.pause ? this.video.play() : this.video.pause();
    }

    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        });

        this.handleToggleVideoClick();
    }

    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    handleProgressChange = event => {
        this.video.currentTime = event.target.value;
    }

    handleSeeking = event => {
        this.setState({
            loading: true
        });
    }

    handleSeeked = event => {
        this.setState({
            loading: false
        });
    }

    handleVolume = event => {
        this.setState({
            lastStateVolume: event.target.value,
            currentVolume: event.target.value
        })
        this.video.volume = this.state.lastStateVolume
    }

    handleClickVolume = event => {
        if (this.video.volume === 0) {
            this.video.volume = this.state.lastStateVolume;
            this.setState({
                currentVolume: this.video.volume
            })
        } else {
            this.setState({
                lastStateVolume: this.video.volume,
                currentVolume: 0
            })
            this.video.volume = 0;
        }
    }

    handleFullScreen = event => {
        if(!document.webkitIsFullScreen) {
            this.player.webkitRequestFullScreen();
        } else {
            document.webkitExitFullscreen();
        }
    }

    componentDidMount() {
        this.setState({
            pause: this.props.autoplay
        })
    }

    setRef = element => {
        this.player = element;
    }

    render() {
        return (
            <VideoPlayerLayout setRef={this.setRef}>
                <Title title={this.props.title} />
                <VideoPlayerControls>
                    <PlayPause handleClick={this.handleToggleVideoClick} pause={this.state.pause} />
                    <Timer duration={formatedTime(this.state.duration)} currentTime={formatedTime(this.state.currentTime)} />
                    <ProgressBar
                        duration={this.state.duration}
                        current={this.state.currentTime}
                        handleProgressChange={this.handleProgressChange}
                    />
                    <Volume handleVolume={this.handleVolume} handleClickVolume={this.handleClickVolume} currentVolume={this.state.currentVolume} />
                    <FullScreen handleFullScreen={this.handleFullScreen} />
                </VideoPlayerControls>
                <Spinner active={this.state.loading} />
                <Video
                    src={this.props.src}
                    autoPlay={this.props.autoplay}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    pause={this.state.pause}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                />
            </VideoPlayerLayout>
        )
    }
}