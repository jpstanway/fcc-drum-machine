import React, { Component } from 'react';
import $ from 'jquery';
import { Grid } from '@material-ui/core';
import DrumPads from './components/DrumPads';
import Interface from './components/Interface';

import { Provider } from 'react-redux';
import store from './store';

import './stylesheets/App.css';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleClick(e) {
    const button = $(e.target).text();
    const audio = $(`#${button}`)[0];
    audio.play();
  }

  handleKeyPress(e) {
    const key = String.fromCharCode(e.keyCode);
    const audio = $(`#${key}`)[0];

    if(audio) {
      audio.play();
    }
    
  }

  render() {
    return (
      <Provider store={store}>
        <div id="container">
          <Grid
            id="drum-machine"
            container 
            justify="center"
            spacing={8}
          >
            <DrumPads click={this.handleClick} />
            <Interface />
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default DrumMachine;
