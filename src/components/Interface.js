import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Display from './Display';
import Controls from './Controls';

class Interface extends Component {
    render() {
        const { switchBank, ledActive, power, togglePower, handleVolume, volume } = this.props;

        return(
            <Grid 
                id="interface"
                item
                container
                xs={3}
            >
                <Display ledActive={ledActive} power={power} volume={volume} />
                <Controls 
                    switchBank={switchBank} 
                    ledActive={ledActive} 
                    power={power} 
                    togglePower={togglePower} 
                    handleVolume={handleVolume}
                    volume={volume}
                />
            </Grid>
        );
    }
}

export default Interface;