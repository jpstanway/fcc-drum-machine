import React, { Component } from 'react';
import Display from './components/Display';
import DrumPads from './components/DrumPads';
import './stylesheets/App.css';

class DrumMachine extends Component {
  render() {
    return (
      <div id="drum-machine">
        <Display />
        <DrumPads />
      </div>
    );
  }
}

export default DrumMachine;
