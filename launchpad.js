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

    

    if (velocity != 0){
        console.log(`command: ${command}, note: ${note}, velocity: ${velocity}`);
        if (note == 38 || note == 50 || note == 62 || note == 72){
            console.log("D")
        }
        if (note == 40 || note == 52 || note == 62 || note == 74){
            console.log("E")
        }
        if (note == 98){
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "blank")
        }
    }
    
}