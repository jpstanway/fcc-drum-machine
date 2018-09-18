import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';

class DrumPads extends Component {

    render() {
        const { handleClick, bank, power } = this.props;

        return(
            <Grid 
                id="drum-pads"
                item
                container
                xs={9}
                spacing={8}
            >
                {bank.map(obj => {
                    return(
                        <Grid item xs={4} key={obj.id}>
                            <Button
                                id={obj.id}
                                className="drum-pad"
                                fullWidth={true}
                                variant="contained"
                                color="primary"
                                disabled={!power}
                                onClick={handleClick}
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