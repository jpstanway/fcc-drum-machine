import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

class Display extends Component {
    render() {
        return(
            <Grid id="display" item xs={12}>
                <p>{this.props.text}</p>
            </Grid>
        );
    }
}

export default Display;