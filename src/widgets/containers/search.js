import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
    state = {
        value: ''
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    setInputRef = element => {
        this.input = element;
    }

    handleInputChange = event => {
        this.setState({
            value: String(event.target.value).replace(/ /g , '-')
        })
    }

    render() {
        return (
            <Search
                handleSubmit={this.handleSubmit}
                setRef={this.setInputRef}
                value={this.state.value}
                handleChange={this.handleInputChange}
            />
        )
    }
}

export default SearchContainer;