import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    numero : 0
  }

  contar(){
    this.setState({
      numero : this.state.numero + 1
    })
  }





  render() {
    return (
      <div className="container">
        <textarea rows="3" onKeyPress = {this.contar.bind(this)}></textarea>
        <div className="counter">{this.state.numero}</div>
      </div>
    );
  }
}

export default App;
