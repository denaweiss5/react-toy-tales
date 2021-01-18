import React, { Component } from 'react';

class ToyForm extends Component {

  constructor(){
    super()

    this.state = {
      name: '',
      image: ''
    }
  }


  handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/toys", {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        image: this.state.image
      })
    })
    .then(response => response.json())
    .then(newToy => {
      this.props.addToy(newToy)
    })
  }

  handleChange = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }



  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" name="image" value={this.state.image} onChange={this.handleChange} placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
