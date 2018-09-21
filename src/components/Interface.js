import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Display from './Display';
import Controls from './Controls';

import { Grid } from '@material-ui/core';

class Interface extends Component {
    render() {
        const { led, power, volume } = this.props;

        return(
            <Grid 
                id="interface"
                item
                container
                xs={3}
            >
                <Display led={led} power={power} volume={volume} />
                <Controls 
                    led={led} 
                    power={power}
                    volume={volume}
                />
            </Grid>
        );
    }
}

Interface.propTypes = {
    power: PropTypes.bool.isRequired,
    led: PropTypes.bool.isRequired,
    volume: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    power: state.audio.power,
    led: state.audio.led,
    volume: state.audio.volume
});

export default connect(mapStateToProps, {})(Interface);