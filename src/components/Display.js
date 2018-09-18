import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

class Display extends Component {
    render() {
        return(
            <Grid id="display-div" item xs={12}>
                <p id="display"></p>
            </Grid>
        );
    }
}

export default Display;