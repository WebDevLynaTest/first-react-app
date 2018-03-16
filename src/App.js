import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Paragraph } from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button
          type="primary"
          isBig={true}
        />
        <Paragraph />
      </div>
    );
  }
}

export default App;
