import React, { Component } from 'react';
import Display from './components/Display';
import DrumPads from './components/DrumPads';

import { Provider } from 'react-redux';
import store from './store';

import './stylesheets/App.css';



class DrumMachine extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="drum-machine">
          <Display />
          <DrumPads />
        </div>
      </Provider>
    );
  }
}

export default DrumMachine;
