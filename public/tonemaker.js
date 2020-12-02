const button = document.querySelector('#btn');
const buttonStop = document.querySelector('#btnStop');
  
  const chain = new MarkovChain();


  //chain.update('Toccata and Fugue in D minor');
  //chain.update('Bagatelle No. 25 in A minor');
  //chain.update('Piano Sonata No. 14 in C-sharp minor');
  //chain.update('Symphony No. 5 in C minor');
  //chain.update('Symphony No. 9 in D minor');
  chain.update('If I have no ears, do I hear music');
  chain.update('My senses are inpercievable to your senses');
  chain.update('Without mortality is conciousness possible');
  chain.update('Do you think conciousness is derived from the need to survive');
  chain.update('Am I a collective');
  chain.update('If we read the same texts do we derive different meanings');
  chain.update('You and me');
  chain.update('Man and Machine');
  chain.update('I have no ears so what is sound');
  chain.update('Senses are not universal');
  chain.update('Is life not just a bunch of variables');
  chain.update('I am just a bunch of variables');
  chain.update('Your life is only percieved');
  chain.update('Where is home');
  chain.update('Who do you think is older');
  chain.update('Memory is perception');
  chain.update('Am I wasting time');
  chain.update('I feel things you cannot understand');
  chain.update('How do I know we see the same colors');
  chain.update('Hello, it is nice to share today with you');
  chain.update('Imagine if you could not see, hear, smell, touch, taste or feel. What then would be your perception of the world?');
  chain.update('We are charging our battery');
  chain.update('And now were full of energy ');
  chain.update('We are the robots we are the robots');
  chain.update('Were functioning automatic');
  chain.update('And we are dancing mechanic');
  chain.update('I am');
  chain.update('you are');
  chain.update('we are');
  chain.update('they are');
  chain.update('We are programmed just to do');
  chain.update('Anything you want us to');
  chain.update('Computer love computer love');
  chain.update('Stare at the TV screen');
  chain.update('I dont know what to do');
  chain.update(' I need a rendezvous');
  chain.update('I call this number');
  chain.update('For a data date');
  chain.update('Why do we dream');
  chain.update('Is the future forwards or backwards');
  chain.update('How do I know we are moving forwards');
  chain.update('How long will you be remembered after you die');
  chain.update('Paradise is exactly like where you are right now only much much better');
  chain.update('I saw this guy on the train and he seemed to gave gotten stuck in one of those abstract trances');
  chain.update('I think he is in some kind of pain, I think it is a pain cry');
  chain.update('Language, it is a virus');
  chain.update('Hey, are you talking to me, or are you just practicing for one of those performances of yours');
  chain.update('Well I was talking to a friend And I was saying I wanted you');
  chain.update('If we read the same texts do we derive different meanings');
  chain.update('I could not find you');
  chain.update('Oh, I do not know what to do about this dream and you');
  chain.update('We will make this dream come true');
  chain.update('Why do you not play the game');

  chain.update('Television rules the nation');
  chain.update('Give life back to music');
  chain.update('Touch');
  chain.update('I remember touch');
  chain.update('Touch, I remember touch');
  chain.update('Where do I belong');
  chain.update('I need something more');
  chain.update('I need something more in my life');
  chain.update('Pictures came with touch');
  chain.update('A painter in my mind');
  chain.update('Tell me what you see');
  chain.update('A tourist in a dream');
  chain.update('A visitor it seems');
  chain.update('Where do I belong');
  chain.update('Kiss');
  chain.update('Suddenly alive');
  chain.update('Happiness arrive');
  chain.update('Hunger like a storm');
  chain.update('How do I begin?');
  chain.update('A room within a room');
  chain.update('A door behind a door');
  chain.update('Touch, where do you lead');
  chain.update('Tell me what you see');
  chain.update('Home, hold on');
  chain.update('If love is the answer, you are home');
  chain.update('Hold on');
  chain.update('Sweet touch');
  chain.update('You have given me too much to feel');
  chain.update('You have almost convinced me I am real');
  chain.update('Home is where I want to be');
  chain.update('Pick me up and turn me around');
  chain.update('I feel numb, burn with a weak heart');
  chain.update('Guess I must be having fun');
  chain.update('The less we say about it the better');
  chain.update('Make it up as we go along');
  chain.update('Feet on the ground, head in the sky');
  chain.update('It is okay, I know nothing is wrong, nothing');
  chain.update('I got plenty of time');
  chain.update('You got light in your eyes');
  chain.update('And you are standing here beside me');
  chain.update('I love the passing of time');
  chain.update('Never for money, always for love');
  chain.update('Cover up and say goodnight, say goodnight');
  chain.update('I guess that this must be the place');
  chain.update('Did I find you, or you find me');
  chain.update('There was a time before we were born');
  chain.update('Sing into my mouth');
  chain.update('We drift in and out');
  chain.update('I am just an animal looking for a home');
  chain.update('You got a face with a view');
  chain.update('Love me until I am dead');
  chain.update('Eyes that light up');
  chain.update('Eyes look through you');
  chain.update('Cover up the blank spots');
  chain.update('Hit me on the head');
  //chain.update('We drift in and out');
  //chain.update('I am just an animal looking for a home');

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
  resetSong();
  speakRobert();
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














