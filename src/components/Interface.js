import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Display from './Display';
import Controls from './Controls';

class Interface extends Component {
    render() {
        const { switchBank, ledActive, power, togglePower } = this.props;

        return(
            <Grid 
                id="interface"
                item
                container
                xs={3}
            >
                <Display ledActive={ledActive} power={power} />
                <Controls switchBank={switchBank} ledActive={ledActive} power={power} togglePower={togglePower} />
            </Grid>
        );
    }
}

export default Interface;