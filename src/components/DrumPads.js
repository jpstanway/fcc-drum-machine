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
                    <Button id="hi-hat-1" className="drum-pad" fullWidth={true} variant="contained" color="primary">
                        Q
                        <audio 
                            id="Q" 
                            className="clip" 
                            src="https://res.cloudinary.com/mtninja/video/upload/v1537222077/hh-1_owqw4s.aiff"
                        ></audio>
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button id="hi-hat-2" className="drum-pad" fullWidth={true} variant="contained" color="primary">
                        W
                        <audio 
                            id="W" 
                            className="clip" 
                            src="https://res.cloudinary.com/mtninja/video/upload/v1537222077/hh-2_vd3xpn.aiff"
                        ></audio>
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button id="kick-drum" className="drum-pad" fullWidth={true} variant="contained" color="primary">
                        E
                        <audio 
                            id="E" 
                            className="clip" 
                            src="https://res.cloudinary.com/mtninja/video/upload/v1537222078/kick_xt7mzy.wav"
                        ></audio>
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button id="bass-slap" className="drum-pad" fullWidth={true} variant="contained" color="primary">
                        A
                        <audio 
                            id="A" 
                            className="clip" 
                            src="https://res.cloudinary.com/mtninja/video/upload/v1537222078/bass_awveqr.aiff"
                        ></audio>
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button id="snare-drum" className="drum-pad" fullWidth={true} variant="contained" color="primary">
                        S
                        <audio 
                            id="S" 
                            className="clip" 
                            src="https://res.cloudinary.com/mtninja/video/upload/v1537222081/snare_fvqqri.aiff"
                        ></audio>
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button id="ride" className="drum-pad" fullWidth={true} variant="contained" color="primary">
                        D
                        <audio 
                            id="D" 
                            className="clip" 
                            src="https://res.cloudinary.com/mtninja/video/upload/v1537222082/ride_rmoi7a.aiff"
                        ></audio>
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button id="chord-am" className="drum-pad" fullWidth={true} variant="contained" color="primary">
                        Z
                        <audio 
                            id="Z" 
                            className="clip" 
                            src="https://res.cloudinary.com/mtninja/video/upload/v1537222099/chord-am_ugdwpx.aiff"
                        ></audio>
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button id="chord-g" className="drum-pad" fullWidth={true} variant="contained" color="primary">
                        X
                        <audio 
                            id="X" 
                            className="clip" 
                            src="https://res.cloudinary.com/mtninja/video/upload/v1537222105/chord-g_emq60w.aiff"
                        ></audio>
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button id="chord-d" className="drum-pad" fullWidth={true} variant="contained" color="primary">
                        C
                        <audio 
                            id="C" 
                            className="clip" 
                            src="https://res.cloudinary.com/mtninja/video/upload/v1537222105/chord-d_ftsbol.aiff"
                        ></audio>
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default DrumPads;