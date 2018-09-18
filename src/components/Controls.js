import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Slider } from '@material-ui/lab';

class Controls extends Component {
    render() {
        const led = this.props.ledActive;

        return(
            <Grid id="controls" item xs={12}>
                <div id="bank">
                    <div className="bank-led">
                        <div className={`led ${led ? 'led-active' : ''}`}></div>
                        <div className={`led ${led ? '' : 'led-active'}`}></div>
                    </div>
                    <Button variant="contained" onClick={this.props.switchBank}>bank</Button>
                </div>
                <div id="volume-control">
                    <Slider id="volume" vertical={true} reverse={true} value={50} />
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