import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

class Display extends Component {
    render() {
        const led = this.props.ledActive;

        return(
            <Grid id="display-div" item xs={12}>
                <p id="display">{led ? 'bank 1' : 'bank 2'}</p>
            </Grid>
        );
    }
}

export default Display;