console.log(navigator);
            let device;

            if (navigator.requestMIDIAccess){
                navigator.requestMIDIAccess().then(success, failure);
            }
            function failure(){
                console.log("Could not connect MIDI");
            }
            function updateDevices(event){
                // console.log(event);
            }

            function success(midiAccess){
                midiAccess.addEventListener("statechange", updateDevices);
                const inputs = midiAccess.inputs;
                // console.log(inputs)

                for(let output of midiAccess.outputs.values()){
                    device = output;
                    console.log("output selected")
                }

                inputs.forEach((input) => {
                    // console.log(input)
                    input.addEventListener("midimessage", handleInput);
                })
            }

            function handleInput(input){
                // console.log(input);
                let command = input.data[0];
                let note = input.data[1];
                let velocity = input.data[2];

                let data = input.data;

                if (velocity > 0){
                    console.log(`command: ${command}, note: ${note}, velocity: ${velocity}`);
                    noteOn(note);
                }

                if (velocity == 0){
                    noteOff(note)
                }
                
                if (note == 36){
                    colorM(note, 10)
                }
                
            }

            function noteOn (note){

                console.log(`note: ${note} // on`)

                if (note == 57){
                    colorM(note, 90)
                }

            }

            function noteOff(note){



            }

            function colorM(key, clr){

                device && device.send([0x1000,key,clr]);

            }

            