import React, { Component } from 'react';

class ToyCard extends Component {


  handleClick = () => {
    const { id } = this.props.toy
    fetch(`http://localhost:3000/toys/${id}`, {method: 'DELETE'})
    .then(response=>response.json())
    .then( data => {
      this.props.deleteToy(id)
    })
  }

  handleIncrease = () => {
    const { id } = this.props.toy
    return this.props.increaseLikes(id)

  }

  render() {

    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={this.handleIncrease}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleIncrease}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
