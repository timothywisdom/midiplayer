// import "../../types/webmidi/index";

import * as React from 'react';

import WebMidi from 'webmidi';

class WebMidiProvider extends React.Component {
    public render() {
        return null;
    }

    public componentDidMount() {
        WebMidi.enable( (err: Error) => {

            if (err) {
                console.log("WebMidi could not be enabled.", err);
            } else {
                console.log("WebMidi enabled!");
                console.log("Inputs", WebMidi.inputs);
                console.log("Outputs", WebMidi.outputs);
            }
            
          });
    }
}

export default WebMidiProvider;