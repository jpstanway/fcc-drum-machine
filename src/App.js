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
      display: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleClick(e) {
    const button = $(e.target).text();
    const audio = $(`#${button}`);
    audio[0].play();
    
    this.setState({
      display: e.target.id
    });
  }

  handleKeyPress(e) {
    const key = String.fromCharCode(e.keyCode);
    const audio = $(`#${key}`);

    if(audio) {
      audio[0].play();

      const name = audio.parents('button')[0].id;
      this.setState({
        display: name
      });      
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
            <Interface displayText={this.state.display} />
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default DrumMachine;
