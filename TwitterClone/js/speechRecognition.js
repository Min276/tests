// if ("webkitSpeechRecognition" in window) {
  if ("webkitSpeechRecognition" || "SpeechRecognition" in window) {
 console.log("Speech Recognition Available");
 
 window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition ;
 // console.log("SR Available");

 let speechRecognition = new SpeechRecognition();

 //continuous listening
 speechRecognition.continuous = true;

 //interim results
 speechRecognition.interimResults = true;

 //
 let final_transcript = "";

 speechRecognition.onstart = () => {
   console.log("Speech Recognition Running")
  };
  speechRecognition.onerror = () => {
    console.log("Speech Recognition Error");
  };
  speechRecognition.onend = () => {
    console.log("Speech Recognition Ended");
  };

speechRecognition.onresult = (event) => {
  // Create the interim transcript string locally because we don't want it to persist like final transcript
  let interim_transcript = "";

  // Loop through the results from the speech recognition object.
  for (let i = event.resultIndex; i < event.results.length; ++i) {
    // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
    if (event.results[i].isFinal) {
      final_transcript += event.results[i][0].transcript;
    } else {
      interim_transcript += event.results[i][0].transcript;
    }
  }

  // Set the Final franscript and Interim transcript.
  document.querySelector("#textmessage").innerHTML = final_transcript;
  // document.querySelector("#interim").innerHTML = interim_transcript;
};

 // Set the onClick property of the start button
  function doStart() {
    // Start the Speech Recognition
    var change = document.querySelector("#change");
    // if(change.style.background == "blueviolet" || change.style.background == "black"){
     change.innerHTML = '<i class="fas fa-microphone"></i>';
    speechRecognition.start();
    change.style.background = "black";
    change.style.borderColor = "#89ff00";
    // }else{
    setTimeout(function(){
      change.innerHTML = '<i class="fas fa-microphone-slash"></i>';
      speechRecognition.stop();
      change.style.background = "black";
    change.style.borderColor = "#ffc107";
    }, 50000)
  // }
  };
  // Set the onClick property of the stop button
  // function doStop() {
  //   // Stop the Speech Recognition
  //   speechRecognition.stop();
  // };

}else {
	console.log("Speech Recognition Not Available");
}