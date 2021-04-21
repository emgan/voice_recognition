const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const greetings = ["better than you at least", "oh hey, i just left your wife","i don't want to talk to you","go away you trash"];

recognition.onstart = function(){
  console.log('you can speak to your microphone');
};

recognition.onresult = function(event){
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
  console.log(transcript);
};

//add the listener on the button
btn.addEventListener('click',()=>{
  recognition.start();
});


function readOutLoud(message){
  const speech = new SpeechSynthesisUtterance();
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  if(message.includes('Bonjour')){
    const finalText = greetings[Math.floor(Math.random() * greetings.length)]
    speech.text = finalText;

  }
  else{
    speech.text = 'i don t want to talk to bastard like you' ;

  }

  

  window.speechSynthesis.speak(speech);

}
