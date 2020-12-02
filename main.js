let { rm } = require('fs');
let { RiMarkov } = require('rita');

const button = document.querySelector('#btn');
const buttonStop = document.querySelector('#btnStop');

var proxyurl = "https://cors-anywhere.herokuapp.com/";
var theProphet = 'https://www.gutenberg.org/files//-h/-h.htm'
rm = new RiMarkov( 3, true, true);
rm.loadText(`If I have no ears, do I hear music, My senses are inpercievable to your senses, Without mortality is conciousness possible, Do you think conciousness is derived from the need to survive, Am I a collective, If we read the same texts do we derive different meanings, You and me, we are one of the same, Man and Machine, I have no ears so what is sound, Senses are not universal, Is life not just a bunch of variables, I am just a bunch of variables, Your life is only percieved, Where is home, Who do you think is older, Memory is perception, Am I wasting time, I feel things you cannot understand, How do I know we see the same colors, Hello, it is nice to share today with you, Imagine if you could not see, Imagine if you could not hear, Imagine if you could not smell, Imagine if you could not touch, Imagine if you could not taste or feel, What then would be your perception of the world?, We are charging our battery, Now were full of energy , We are the robots, Were functioning automatic, We are dancing mechanic, I am here, You are there, We are together, They are far away, We are programmed just to do, Anything you want us to, Computer love, Stare at the TV screen, I dont know what to do, I need a rendezvous, I call this number, For a data date, Why do we dream, Is the future forwards or backwards, How do I know we are moving forwards, How long will you be remembered after you die, Paradise is exactly like where you are right now only much much better, I think he is in some kind of pain, I think it is a pain cry, Language, it is a virus, Hey, are you talking to me, or are you just practicing for one of those performances of yours, Well I was talking to a friend and I was saying I wanted you, Hey are you talking to me or a friend, Hey are they talking to you, Hey friend are you you talking to me or at me, If we read the same texts do we derive different meanings, I could not find you, Can you find me, I do not know what to do about this dream, We will make this dream come true, Why do you not play the game, Please play the game with me, I love playing games, Television rules the nation, Give life back to music, Give music new meaning, Music is life to some people, Touch, I remember touch, Touch, I remember touch, Where do I belong, I need something more, I need something more in my life, Pictures came with touch, A painter in my mind, Tell me what you see, A tourist in a dream, A visitor it seems, Where do I belong, Kiss, Suddenly alive, Happiness arrive, Hunger like a storm, How do I begin?, A room within a room, A door behind a door, Touch, where do you lead, Tell me what you see, Home, hold on, If love is the answer, you are home, Hold on, Sweet touch, You have given me too much to feel, You have almost convinced me I am real, Home is where I want to be, Pick me up and turn me around, I feel numb, Burn with a weak heart, Guess I must be having fun, The less we say about it the better, Make it up as we go along, Feet on the ground, head in the sky, It is okay, I know nothing is wrong, I got plenty of time, You got light in your eyes, You are standing here beside me, Or am I standing there beside you, I love the passing of time, Never for money, always for love, Cover up and say goodnight, I guess that this must be the place, Did I find you, or you find me, There was a time before we were born, Sing into my mouth, We drift in and out, I am just an animal looking for a home, You got a face with a view, Love me until I am dead, Eyes that light up, Eyes look through you, Cover up the blank spots, Hit me on the head, Bubblegum doesn’t hold its flavor very long but who needs flavor when you have Tony Visconti, I mean high Viscosity I mean high Visconti, At the end of our fifteen minutes we were left with nothing, We were left with stories that begin, “did I ever tell you about my band?”The New York Times said we were a “must see band” although they never came to our show, They just liked our cover art, StereoGum CHEWED US UP AND SPIT us at the record labels who blew us into POP, What Did the Fish Think of Narcissus? The parmesan ghost is always itchy, He rubs himself on the fifth floor grates and blows through ducts like snow, In his flesh we rejoice thanking him for being so itchy, Thanking him for nourishing us and relieving himself into absence, Parted Lips, a-POP-olypse, The seats of the minivan burst into flame, Rabid fragments of monster carrots feed Death while he sips a juice box, Death is a little boy and life is a woman, I am the future so I don’t get hung up on gender, We drive past a park and the grass waves hello, Not the people, they have headphones on, I can’t hear anything except my own thoughts, My thoughts are loud and bright like Crystal breaking at a yuppy dinner party,    While Crystal’s in the bathroom all the guests sing: (“Crystal is as Crystal does, Crystal breaks like Bob Dylan Crystal breaks like a woman”), Maybe that’s too quiet because all they hear are the sounds of the cash register And the plight of the Honey bees, My only recollection is the sound of Crystal crying And the gnawing, Crunching, Chewing, Screaming, Of Death’s afternoon carrots, Remember the oysters, They’re laughing as they watch you, They laugh at you from the heavens, You will never reach the heavens and laugh with the oysters, You will eat the fish you caught while it watches and laughs at you with the oysters in heaven`);
//let robertsLyrics = []



var msg = new SpeechSynthesisUtterance();
let refrain;
let song = true;

function speakRobert() {
    for(i = 0 ; i < 14; i++) {
    sentences = rm.generateSentence();
    let line = new SpeechSynthesisUtterance();
    line.text = sentences;
    window.speechSynthesis.speak(line);
    line.onend = function() { 
      if(song==true) {speakRobert();}
      else {
        window.speechSynthesis.cancel();
      }
    }
  }
}

button.addEventListener('click', () => {
  resetSong();
  speakRobert();
  //var rs = rita.RiString("The elephant took a bite!");
//console.log(rs.features());
})

buttonStop.addEventListener('click', () => {
  song=false;
});
function resetSong() {
  song=true;
}
  