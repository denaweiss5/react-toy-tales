import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

constructor(){
  super()

  this.state = {
    display: false,
    toys: []
  }
}

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  componentDidMount(){
    fetch("http://localhost:3000/toys")
    .then(response => response.json())
    .then(toysArr => {
      this.setState({
        toys: toysArr
      })
    })
  }

  addToy = (newToy) => {
    this.setState = ({
      toys: [...this.state.toys, newToy]
    })
  }

  deleteToy = (id) => {
    console.log(id)
    const updatedToys = this.state.toys.filter(toyObj => toyObj.id !== id)
    

    this.setState({
      toys: updatedToys
    })
  }

  increaseLikes = (id) => {
    console.log(id)
    

    const newToyArr = this.state.toys.map(toy => {
      if(toy.id === id) {
        toy.likes++
        return toy
      } else {
        return toy
      }
    })
      this.setState({
        toys: newToyArr
      })
  

  
  }

  
  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} deleteToy={this.deleteToy} increaseLikes={this.increaseLikes}/>
      </>
    );
  }

  }

export default App;
