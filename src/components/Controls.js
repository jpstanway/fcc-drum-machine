import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSounds, toggleOnOff, changeLED, adjustVolume } from '../actions/audioActions';

import { Grid, Button } from '@material-ui/core';
import { Slider } from '@material-ui/lab';

class Controls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bank: 0
        }
        this.switchBank = this.switchBank.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    switchBank() {
        const next = this.state.bank === 0 ? 1 : 0;
        this.props.getSounds(next);
        this.props.changeLED();

        this.setState({ bank : next });
    }

    onChange(event, value) {
        this.props.adjustVolume(value);
    }
    
    render() {
        const { led, toggleOnOff, power, volume } = this.props;

        return(
            <Grid id="controls" item xs={12}>
                <div id="bank">
                    <div className="bank-led">
                        <div className={`led ${led && power ? 'led-active' : ''}`}></div>
                        <div className={`led ${!led && power ? 'led-active' : ''}`}></div>
                    </div>
                    <Button variant="contained" disabled={!power} onClick={this.switchBank}>bank</Button>
                </div>
                <div id="volume-control">
                    <Slider 
                        id="volume" 
                        vertical={true} 
                        reverse={true} 
                        value={volume} 
                        step={1} 
                        onChange={this.onChange} 
                    />
                </div>
                <div id="power">
                    <div className={`led ${power ? 'led-active' : ''}`}></div>
                    <Button variant="contained" onClick={toggleOnOff}>On/Off</Button>
                </div>
            </Grid>
        );
    }
}

Controls.propTypes = {
    getSounds: PropTypes.func.isRequired,
    toggleOnOff: PropTypes.func.isRequired,
    changeLED: PropTypes.func.isRequired,
    adjustVolume: PropTypes.func.isRequired
}

export default connect(null, { getSounds, toggleOnOff, changeLED, adjustVolume })(Controls);