let toneButton = document.querySelector(".soundbtn");
//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();
const now = Tone.now();

//play a middle 'C' for the duration of an 8th note
toneButton.onclick = function() {
    synth.triggerAttackRelease("C4", "8n");
    synth.triggerAttack("C4", now);
    //console.log(name);
  
    
}