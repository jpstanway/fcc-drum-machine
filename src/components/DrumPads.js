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
                <Grid item xs={4}>
                    <Button className="drum-pad" fullWidth={true} variant="contained" color="primary">Q</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button className="drum-pad" fullWidth={true} variant="contained" color="primary">W</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button className="drum-pad" fullWidth={true} variant="contained" color="primary">E</Button>
                </Grid>

                <Grid item xs={4}>
                    <Button className="drum-pad" fullWidth={true} variant="contained" color="primary">A</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button className="drum-pad" fullWidth={true} variant="contained" color="primary">S</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button className="drum-pad" fullWidth={true} variant="contained" color="primary">D</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button className="drum-pad" fullWidth={true} variant="contained" color="primary">Z</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button className="drum-pad" fullWidth={true} variant="contained" color="primary">X</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button className="drum-pad" fullWidth={true} variant="contained" color="primary">C</Button>
                </Grid>
            </Grid>
        );
    }
}

export default DrumPads;