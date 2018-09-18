import React, { Component } from 'react';
import $ from 'jquery';
import { Grid } from '@material-ui/core';
import DrumPads from './components/DrumPads';
import Interface from './components/Interface';
import Bank from './components/Bank';

import { Provider } from 'react-redux';
import store from './store';

import './stylesheets/App.css';

class DrumMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bank: Bank,
      bankIndex: 0,
      ledActive: true,
      power: true
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.switchBank = this.switchBank.bind(this);
    this.togglePower = this.togglePower.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleClick(e) {
    const button = $(e.target).text();
    const audio = $(`#${button}`);
    audio[0].currentTime = 0;
    audio[0].play();
    
    $('#display').text(e.target.id);
  }

  handleKeyPress(e) {
    const key = String.fromCharCode(e.keyCode);
    if(key.search(/[Q|W|E|A|S|D|Z|X|C]/i) > -1) {
      const audio = $(`#${key}`);
      audio[0].currentTime = 0;
      audio[0].play();

      const name = audio.parents('button')[0].id;
      $('#display').text(name);
    }
  }

  switchBank() {
    this.setState({
      bankIndex: this.state.bankIndex === 0 ? 1 : 0,
      ledActive: !this.state.ledActive
    });
    
  }

  togglePower() {
    this.setState({
      power: !this.state.power
    });
  }

  render() {
    const { bank, bankIndex, ledActive, power } = this.state;

    return (
      <Provider store={store}>
        <div id="container">
          <Grid
            id="drum-machine"
            container 
            justify="center"
            spacing={8}
          >
            <DrumPads handleClick={this.handleClick} bank={bank[bankIndex]} power={power} />
            <Interface switchBank={this.switchBank} ledActive={ledActive} power={power} togglePower={this.togglePower} />
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default DrumMachine;
