import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Slider } from '@material-ui/lab';

class Controls extends Component {
    render() {
        return(
            <Grid id="controls" item xs={12}>
                <div id="bank">
                    <div className="bank-led">
                        <div className="led led-active"></div>
                        <div className="led"></div>
                    </div>
                    <Button variant="contained">bank</Button>
                </div>
                <div id="volume-control">
                    <Slider id="volume" vertical={true} />
                </div>
                <div id="power">
                    <div className="led led-active"></div>
                    <Button variant="contained">On/Off</Button>
                </div>
            </Grid>
        );
    }
}

export default Controls;