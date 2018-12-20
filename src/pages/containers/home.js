import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';

class Home extends Component {
    state = {
        modalVisible: false
    }

    handleToggleModal = (event) => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
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
                                <h1>Modal</h1>
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        );
    }
}

export default Home;
