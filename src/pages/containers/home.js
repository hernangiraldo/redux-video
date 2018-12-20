import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component {
    state = {
        modalVisible: false
    }

    handleToggleModal = (media) => {
        if (!this.state.modalVisible) {
            this.setState({
                modalVisible: true,
                media
            })
        } else {
            this.setState({
                modalVisible: false
            })
        }
    }

    render() {
        return(
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories categories={this.props.data.categories} handleToggleModal={this.handleToggleModal} />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleToggleModal}>
                                <VideoPlayer autoplay={true} title={this.state.media.title} src={this.state.media.src} />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        );
    }
}

export default Home;
