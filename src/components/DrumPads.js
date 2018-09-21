import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from 'jquery';
import { getSounds } from '../actions/audioActions';

import { Grid, Button } from '@material-ui/core';

class DrumPads extends Component {
    constructor(props) {
    super(props);

    this.toggleEvent = this.toggleEvent.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
    }

    componentDidMount() {
        this.props.getSounds(0);
    }

    toggleEvent(power) {
        if(power) {
            document.addEventListener('keydown', this.handleKeyPress);
        } else {
            document.removeEventListener('keydown', this.handleKeyPress);
        }
    }

    handleClick(e) {
        const button = $(e.target).text();
        const audio = $(`#${button}`);
        this.playSound(audio[0]);
        
        $('#display').text(e.target.id);
    }

    handleKeyPress(e) {
        const key = String.fromCharCode(e.keyCode);
        if(key.search(/[Q|W|E|A|S|D|Z|X|C]/i) > -1) {
            const audio = $(`#${key}`);
            this.playSound(audio[0]);

            const name = audio.parents('button')[0].id;
            $('#display').text(name);
        }
    }

    playSound(sound) {
    sound.currentTime = 0;
    sound.volume = this.props.volume * 0.01;
    sound.play();
    }

    render() {
        const { sounds, power } = this.props;
        this.toggleEvent(power);

        return(
            <Grid 
                id="drum-pads"
                item
                container
                xs={9}
                spacing={8}
            >
                {sounds.map(obj => {
                    return(
                        <Grid item xs={4} key={obj.id}>
                            <Button
                                id={obj.id}
                                className="drum-pad"
                                fullWidth={true}
                                variant="contained"
                                color="primary"
                                disabled={!power}
                                onClick={this.handleClick}
                            >
                                {obj.key}
                                <audio
                                    id={obj.key}
                                    className="clip"
                                    src={obj.src}
                                ></audio>
                            </Button>
                        </Grid>
                    );
                })}
            </Grid>
        );
    }
}

DrumPads.propTypes = {
    getSounds: PropTypes.func.isRequired,
    sounds: PropTypes.array.isRequired,
    power: PropTypes.bool.isRequired,
    volume: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    sounds: state.audio.sounds,
    power: state.audio.power,
    volume: state.audio.volume
});

export default connect(mapStateToProps, { getSounds })(DrumPads);