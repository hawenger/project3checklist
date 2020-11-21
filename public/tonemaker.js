//function setup() {
//    createCanvas(600, 800)
//    frameRate(25)
//    background(0)
//    fill(127)
//    stroke(127)
//    createLoop({
//        gif: {fileName: "noiseLoop1d.gif" },
//        noiseRadius: 0.3
//    })
//}
//
//function draw() {
//    background(0)
//    translate(0, height / 2)
//    const distributionFrequency = 0.01
//    for (let x = 0; x < width; x++) {
//        const y = animLoop.noise1D(x * distributionFrequency) * height / 2
//        ellipse(x, y, 5)
//    }

//function setup() {
//    createCanvas(300, 300)
//    frameRate(30)
//    createLoop({
//        gif: {
//            options: { quality: 5 },
//            fileName: "noiseLoop.gif",
//            startLoop: 1,
//            endLoop: 2
//        }
//    })
//    animLoop.noiseFrequency(0.4)
//    background(255)
//}
//
//function draw() {
//    translate(width / 2, height / 2)
//    const x = cos(animLoop.theta) * width / 3
//    const y = animLoop.noise() * height / 3
//    ellipse(x, y, 50, 50)
//}
//
//////let octaveArray=[];
//////let chordArray=[];
//////let letters=['C', 'D', 'E', 'F', 'G', 'A', 'B'];
////////Create random numbers for Octave Variation
//////function randomScale() {
//////    for(var i=0; i < 10; i++); {
////        let lowOctave= (Math.floor(Math.random() * 2) + 1);
////        let mediumOctave=(Math.floor(Math.random() * 2) + 2);
////        let highOctave=(Math.floor(Math.random() * 3) + 2);
////        octaveArray.push(lowOctave);
////        octaveArray.push(mediumOctave);
////        octaveArray.push(highOctave);
////};
////function makeChords() {
////    for(var i=0; i < 9; i++); {
////        let letterCopy = Array.from(letters);
////        let triad = removal(letterCopy, 2);
////        chordArray.push(triad);
////
////    }
////}
//////Make a Copy of letters Array
////const copy = (arr, n) => {
////    for(let i = n-1; i < arr.length; i += n){
////       arr.from(letterCopy);
////    };
//// };
//
//const { Tone } = require("tone/build/esm/core/Tone");
//
////let triad = removal(letters, 2);
//const synth = new Tone.MembraneSynth()//.toDestination();
////const pDelay = new PingPongDelay();
//
////pDelay.toDestination();
////synth.connect(pDelay);
////synth.oscillator.type = 'sine';
//const gain = new Tone.Gain(.8);
//gain.toDestination();
//synth.connect(gain);
////const scaleVariables=[1,2,3,4,5];
//let x;
//let y;
//let z;
//
//function randomScale() {
//        for(var i=0; i < 10; i++); {
//            x = (Math.floor(Math.random() * 5) + 1);
//            y = (Math.floor(Math.random() * 5) + 1);
//            z = (Math.floor(Math.random() * 5) + 1);
//        }
//}
//    //        let mediumOctave=(Math.floor(Math.random() * 2) + 2);
//    //        let highOctave=(Math.floor(Math.random() * 3) + 2);
//    //        octaveArray.push(lowOctave);
//    //        octaveArray.push(mediumOctave);
//    //        octaveArray.push(highOctave);
//    //};
//    //function makeChords() {
//    //    for(var i=0; i < 9; i++); {
//    //        let letterCopy = Array.from(letters);
//    //        let triad = removal(letterCopy, 2);
//    //        chordArray.push(triad);
//
//const dminor =[`D${x}`, `F${y}`, `A${z}`];
//const eMinor=[];
////const
//
//let index = 0;
//
//Tone.Transport.scheduleRepeat(time => {
//    repeat(time);
//}, '8n');
//
////Tone.Transport.bpm.value=120;
//
//function repeat(time) {
//    let scaleOne=[];
//    //let scaleTwo=[];
//    const cMajor = [`C${x}`, `E${y}`, `G${z}`,`Bb${x}`];
//        for(var i=0; i < cMajor.length; i++); {
//        let newNote= cMajor[Math.floor(Math.random()*cMajor.length)];
//        scaleOne.push(newNote);
//  
//    //const dMinor =[`D${x}`, `F${y}`, `A${z}`];
//    //let note = scaleOne[indexTwo % scaleOne.length];
//    let noteTwo = scaleOne[index % cMajor.length];
//    //let noteThree = scaleOne[indexThree % cMajor.length];
//    //let realNote= scaleTwo[index % cMinor.length];
//    //synth.triggerAttackRelease(note, '8n', time)
//
//    synth.triggerAttackRelease({noteTwo},'8n', time);
//    //synth.triggerAttackRelease(`${cMajor},${cMinor}`, '8n', time);
//    index++;
//    //indexTwo--;
//    //indexThree++;
//}
//document.querySelector('.soundbtn')?.addEventListener('click', async () => {
//    randomScale();
//    await Tone.start()
//    Tone.Transport.start();
//    setTimeout(() => {
//        Tone.Transport.stop();
////    }, 5000);
////});
//
//let x;
//let y;
//let z;
//let a;
//let b;
//let c;
//
//function randomScale() {
//            for(var i=0; i < 10; i++); {
//                x = (Math.floor(Math.random() * 5) + 1);
//                y = (Math.floor(Math.random() * 5) + 1);
//                z = (Math.floor(Math.random() * 5) + 1);
//                a = (Math.floor(Math.random() * 5) + 1);
//                b = (Math.floor(Math.random() * 5) + 1);
//                c = (Math.floor(Math.random() * 5) + 1);
//            }
//}
//
//const synth = new Tone.PolySynth();
////synth.oscillator.type = 'sine';
//const gain = new Tone.Gain(0.5);
//gain.toDestination();
//synth.connect(gain);
//
//
//
//let index = 0;
//
//Tone.Transport.scheduleRepeat(time => {
//    repeat(time);
//
//}, '8n');
//
//function repeat(time) {
//    const notes = [`C${x} E${x} G${x}`, `F${y} A${y} C${y}`, `D${z} F${z} A${z}`, `C${a} E${a} G${a}`, `A${b} C${b} E${b}`, `C${c} E${c} G${c} B${b}`];
//    let note = notes[index % notes.length];
//    synth.triggerAttackRelease(note, '8n', time);
//    index ++;
//}
//
document.querySelector('.soundbtn')?.addEventListener('click', async () => {
    setup();
    draw();
})
