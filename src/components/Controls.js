import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Slider } from '@material-ui/lab';

class Controls extends Component {
    render() {
        const { switchBank, ledActive, power, togglePower, handleVolume, volume } = this.props;

        return(
            <Grid id="controls" item xs={12}>
                <div id="bank">
                    <div className="bank-led">
                        <div className={`led ${ledActive && power ? 'led-active' : ''}`}></div>
                        <div className={`led ${!ledActive && power ? 'led-active' : ''}`}></div>
                    </div>
                    <Button variant="contained" disabled={!power} onClick={switchBank}>bank</Button>
                </div>
                <div id="volume-control">
                    <Slider 
                        id="volume" 
                        vertical={true} 
                        reverse={true} 
                        value={volume} 
                        step={1} 
                        onChange={handleVolume} 
                    />
                </div>
                <div id="power">
                    <div className={`led ${power ? 'led-active' : ''}`}></div>
                    <Button variant="contained" onClick={togglePower}>On/Off</Button>
                </div>
            </Grid>
        );
    }
}

export default Controls;