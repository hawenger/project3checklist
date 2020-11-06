let toneButton = document.querySelector(".soundbtn");
//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();
setInterval(() => console.log(Tone.now()), 100);

//play a middle 'C' for the duration of an 8th note
//toneButton.onclick = function() {
    
    

  
    
//}

document.querySelector('.soundbtn')?.addEventListener('click', async () => {
	await Tone.start()
    console.log('audio is ready')
    synth.triggerAttackRelease("C4", "8n");
});