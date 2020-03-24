import React, { Component } from 'react';
import './App.css';
import './styles/bootstrap/bootstrap.min.css';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        Hello 'react'!
      </div>
    );
  }
}

export default App;
