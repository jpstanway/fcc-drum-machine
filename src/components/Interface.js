import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Display from './Display';
import Controls from './Controls';

class Interface extends Component {
    render() {
        return(
            <Grid 
                id="interface"
                item
                container
                xs={3}
            >
                <Display ledActive={this.props.ledActive} />
                <Controls switchBank={this.props.bankBtn} ledActive={this.props.ledActive} />
            </Grid>
        );
    }
}

export default Interface;