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
      power: true,
      volume: 50
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.playSound = this.playSound.bind(this);
    this.switchBank = this.switchBank.bind(this);
    this.togglePower = this.togglePower.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleClick(e) {
    const button = $(e.target).text();
    const audio = $(`#${button}`);
    this.playSound(audio[0]);
    
    $('#display').text(e.target.id);
  }

  handleKeyPress(e) {
    const key = String.fromCharCode(e.keyCode);
    if(key.search(/[Q|W|E|A|S|D|Z|X|C]/i) > -1) {
      const audio = $(`#${key}`);
      this.playSound(audio[0]);

      const name = audio.parents('button')[0].id;
      $('#display').text(name);
    }
  }

  handleVolume(event, value) {
    this.setState({ 
      volume: value 
    });
  }

  playSound(sound) {
    sound.currentTime = 0;
    sound.volume = this.state.volume * 0.01;
    sound.play();
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
    const { bank, bankIndex, ledActive, power, volume } = this.state;

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
            <Interface 
              switchBank={this.switchBank} 
              ledActive={ledActive} 
              power={power} 
              togglePower={this.togglePower} 
              handleVolume={this.handleVolume} 
              volume={volume}
            />
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default DrumMachine;
