import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

class Display extends Component {
    render() {
        return(
            <Grid id="display" item xs={12}>
                <h1>Display Here</h1>
            </Grid>
        );
    }
}

export default Display;