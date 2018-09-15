import React, { Component } from 'react';

class DrumPads extend Component {
    render() {
        return(
            <div id="drum-pads">
                <button className="drum-pad">Drum Pad 1</button>
                <button className="drum-pad">Drum Pad 2</button>
                <button className="drum-pad">Drum Pad 3</button>
                <button className="drum-pad">Drum Pad 4</button>
                <button className="drum-pad">Drum Pad 5</button>
                <button className="drum-pad">Drum Pad 6</button>
                <button className="drum-pad">Drum Pad 7</button>
                <button className="drum-pad">Drum Pad 8</button>
                <button className="drum-pad">Drum Pad 9</button>
            </div>
        );
    }
}

export default DrumPads;