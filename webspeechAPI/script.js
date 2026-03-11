const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition )();


function startRecognition(){
    recognition.start();

}

recognition.onresult = function(event){
    const transcript = event.results[0][0].transcript;
    document.getElementById('output').innerText = transcript;
}

function speakText(){
    let text = document.getElementById("textInput").value;
    let speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
}

