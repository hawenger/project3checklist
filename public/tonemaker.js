const button = document.querySelector('#btn');
const buttonStop = document.querySelector('#btnStop');



//import Chain from 'markov-chains';
//
//const states = [
//  // week 1
//  [
//    { temp: 'hot',  weather: 'sunny' },
//    { temp: 'hot',  weather: 'cloudy' },
//    { temp: 'warm', weather: 'cloudy' },
//    { temp: 'warm', weather: 'cloudy' },
//    { temp: 'warm', weather: 'rainy' },
//    { temp: 'cool', weather: 'cloudy' },
//    { temp: 'warm', weather: 'sunny' },
//  ],
// 
//  // week 2
//  [
//    { temp: 'warm', weather: 'sunny' },
//    { temp: 'warm', weather: 'cloudy' },
//    { temp: 'warm', weather: 'cloudy' },
//    { temp: 'warm', weather: 'sunny' },
//    { temp: 'hot',  weather: 'sunny' },
//    { temp: 'hot',  weather: 'sunny' },
//    { temp: 'warm', weather: 'sunny' },
//  ],
// 
//  // etc.
//];
//const chain = new Chain(states);
//const forecast = chain.walk();
//console.log(forecast);
 // const chain = new MarkovChain();
//
//
 // //chain.update('Toccata and Fugue in D minor');
 // //chain.update('Bagatelle No. 25 in A minor');
 // //chain.update('Piano Sonata No. 14 in C-sharp minor');
 // //chain.update('Symphony No. 5 in C minor');
 // //chain.update('Symphony No. 9 in D minor');


var msg = new SpeechSynthesisUtterance();
let refrain;
let song = true;

//function generateSongLyrics() {
//  let a = chain.generate();
//  let b = chain.generate();
//  let c = chain.generate();
//  song = `${a}  ${b}  ${c}`
//}

function speakRobert() {
  for (let i = 0; i < 5; i++) {
    let line = new SpeechSynthesisUtterance();
    line.text = chain.generate();
    window.speechSynthesis.speak(line);
    line.onend = function() { 
      if(song==true) {speakRobert();}
      else {
        window.speechSynthesis.cancel();
      }
    }
  }
}
  // Generate a new sentence.
  console.log(chain.generate());
  console.log(chain.generate());
  console.log(chain.generate());
  console.log(chain.generate());
  console.log(chain.generate());

button.addEventListener('click', () => {
  //resetSong();
  //speakRobert();
  //var rs = rita.RiString("The elephant took a bite!");
console.log(rs.features());
})

buttonStop.addEventListener('click', () => {
  song=false;
});
function resetSong() {
  song=true;
}
  
   
   
  
  
  



















//let markov = new Markov('numeric');
//
//markov.addStates([
//    {
//        state:1,
//        predictions: [
//            2, 4, 5, 6
//        ]
//    },
//    {
//        state: 2,
//        predicitions: [
//            5
//        ]
//    },
//    {
//        state:4,
//        predicitions: [
//            1, 5, 6
//        ]
//    },
//    {
//        state:5,
//        predicitions: [
//            1, 6
//        ]
//    },
//    {
//        state:6,
//        predicitions: [
//            2, 4, 5
//        ]
//    }
//]);
//
//markov.train(3);


//let chordSequence = markov.generate();

//console.log(chordSequence);

//const MarkovGen = require('markov-generator');
// 
//let markov = new MarkovGen({
//  input: ['array of sentences', 'to base the chains on', 'should go here'],
//  minLength: 10
//});
// 
//let sentence = markov.makeChain();
//console.log(sentence);














