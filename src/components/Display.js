import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

class Display extends Component {
    render() {
        const { ledActive, power } = this.props;
        const display = power ? (ledActive ? 'bank 1' : 'bank 2') : '';

        return(
            <Grid id="display-div" item xs={12}>
                <p id="display">{display}</p>
            </Grid>
        );
    }
}

export default Display;