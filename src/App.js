import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import DrumPads from './components/DrumPads';
import Interface from './components/Interface';

import { Provider } from 'react-redux';
import store from './store';

import './stylesheets/App.css';



class DrumMachine extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="container">
          <Grid
            id="drum-machine"
            container 
            justify="center"
            spacing={8}
            xs={12}
          >
            <DrumPads />
            <Interface />
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default DrumMachine;
