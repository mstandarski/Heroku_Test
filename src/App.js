import React, { Component } from 'react';
import './App.css';

import Character from './container/Character'
import Navigation from './components/navigation/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        
        <Navigation />
        <Character />


      </div>
    );
  }
}

export default App;
