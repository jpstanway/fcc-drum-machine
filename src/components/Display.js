import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

class Display extends Component {
    render() {
        const { ledActive, power, volume } = this.props;
        const display = power ? (ledActive ? 'bank 1' : 'bank 2') : '';
        const displayVolume = power ? `Vol: ${volume}` : '';

        return(
            <Grid id="display-div" item xs={12}>
                <p id="display">{display}</p>
                <p id="volume-display">{displayVolume}</p>
            </Grid>
        );
    }
}

export default Display;