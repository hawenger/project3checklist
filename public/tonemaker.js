let toneButton = document.querySelector(".soundbtn");
//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
toneButton.onclick = function() {
    synth.triggerAttackRelease("C4", "8n");
    console.log("clicked");
    
    writeCookie();
    readCookie();
    //console.log(name);
  
    
}

function writeCookie() {
    document.cookie="id = 3214;returning = true;"
}

function readCookie() {
let currentCookie = document.cookie;
if(currentCookie == "") {
    console.log("hello")
} else {
    console.log("welcome back")
}
}

function userName() {
    name = prompt("What's a fun name I can call you by?")
    if (name === oldName) {

    }
    if (name != null) {
        
    }
}