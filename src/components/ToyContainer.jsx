import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component {

  renderToys = () => {
    return this.props.toys.map(toy => {
      return <ToyCard key={toy.id} toy={toy} deleteToy={this.props.deleteToy} increaseLikes={this.props.increaseLikes} />
    })
  }
  render(){
    return(
      <div id="toy-collection">
        {this.renderToys()}
      </div>
    );
  }
}


export default ToyContainer;
