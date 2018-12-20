import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css'

export default class Media extends Component {

  state = {
    title: this.props.title
  };

  handleClick = () => {
    this.props.openModal(this.props);
  }

  render() {
    return (
      <div className="card" onClick={this.handleClick}>
        <img className="card__img" src={this.props.cover} alt="course" />
        <div className="card__info">
          <h3>{this.props.title}</h3>
          <p>{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
}