import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';

class DrumPads extends Component {
    render() {
        return(
            <Grid 
                id="drum-pads"
                item
                container
                xs={9}
                spacing={8}
            >
                {this.props.bank.map(obj => {
                    return(
                        <Grid item xs={4} key={obj.id}>
                            <Button
                                id={obj.id}
                                className="drum-pad"
                                fullWidth={true}
                                variant="contained"
                                color="primary"
                                onClick={this.props.click}
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

export default DrumPads;