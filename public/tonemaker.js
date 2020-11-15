let octaveArray=[];
let chordArray=[];
let letters=['C', 'D', 'E', 'F', 'G', 'A', 'B'];
//Create random numbers for Octave Variation
function randomScale() {
    for(var i=0; i < 10; i++); {
        let lowOctave= (Math.floor(Math.random() * 2) + 1);
        let mediumOctave=(Math.floor(Math.random() * 2) + 2);
        let highOctave=(Math.floor(Math.random() * 3) + 2);
        octaveArray.push(lowOctave);
        octaveArray.push(mediumOctave);
        octaveArray.push(highOctave);
};
function makeChords() {
    for(var i=0; i < 9; i++); {
        let letterCopy = Array.from(letters);
        let triad = removal(letterCopy, 2);
        chordArray.push(triad);

    }
}
//Make a Copy of letters Array
const copy = (arr, n) => {
    for(let i = n-1; i < arr.length; i += n){
       arr.from(letterCopy);
    };
 };
let triad = removal(letters, 2);
const synth = new Tone.PolySynth()//.toDestination();
//const pDelay = new PingPongDelay();

//pDelay.toDestination();
//synth.connect(pDelay);
//synth.oscillator.type = 'sine';
const gain = new Tone.Gain(.8);
gain.toDestination();
synth.connect(gain);
//const scaleVariables=[1,2,3,4,5];
let x;
let y;
let z;



const dminor =[`D${x}`, `F${y}`, `A${z}`];
const eMinor=[];
//const

let index = 0;

Tone.Transport.scheduleRepeat(time => {
    repeat(time);
}, '8n');

//Tone.Transport.bpm.value=120;

function repeat(time) {
    let scaleOne=[];
    let scaleTwo=[];
    const cMajor = [`C${x}`, `Eb${z}`, `G${b}`,`Bb${c}`];
    const cMinor = [`D${y}`,`F${a}`,`A${c}`];//,
    function run () {
        for(var i=0; i < cMajor.length; i++); {
        let newNote= cMajor[Math.floor(Math.random()*cMajor.length)];
        scaleOne.push(newNote);
  
        }
    };
    const dMinor =[`D${x}`, `F${y}`, `A${z}`];
    let note = scaleOne[indexTwo % scaleOne.length];
    let noteTwo = scaleOne[index % cMajor.length];
    let noteThree = scaleOne[indexThree % cMajor.length];
    let realNote= scaleTwo[index % cMinor.length];
    //synth.triggerAttackRelease(note, '8n', time)

    synth.triggerAttackRelease(`${noteTwo}`,'8n', time);
    //synth.triggerAttackRelease(`${cMajor},${cMinor}`, '8n', time);
    index++;
    indexTwo--;
    indexThree++;
}
document.querySelector('.soundbtn')?.addEventListener('click', async () => {
    randomScale();
    await Tone.start()
    Tone.Transport.start();
    setTimeout(() => {
        Tone.Transport.stop();
    }, 5000);
});