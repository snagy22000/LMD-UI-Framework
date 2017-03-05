(function () {
  "use strict";

  var text2speech = {

    init: function () {
      this.cacheDOM();
      this.addEvent(this.bodyElement, 'keypress', this.speech.bind(this));
    },

    cacheDOM: function () {
      this.bodyElement = document.querySelector('body');
      this.selectedElements = window.getSelection();
    },

    // styleSelection: function (text) {

    // },

    addEvent: function (target, eventType, eventHandler) {
      if (target) {
        target.addEventListener(eventType, eventHandler);
      } else return;
    },

    speech: function (e) {
      var key = e.keyCode;
      var speechText = new SpeechSynthesisUtterance(this.selectedElements)
      var speechSynth = window.speechSynthesis;  

      console.log(e.keyCode);
      console.log(e.shiftKey);

      // console.log(splitText);
      // console.log(speechSynth.getVoices());

      // Start Speech 
      if (key === 66) { // shift + b       

        // Split text in chuncks
        var splitText = this.splitText(speechText.text);

        splitText.forEach(function (text) {
          speechText = new SpeechSynthesisUtterance(text);
          // Configure Speeach setting (en-Us)
          speechText.rate = .9;
          speechText.pitch = .9;
          speechText.lang = 'en-US';

          speechSynth.speak(speechText);
          // this.styleSelection(speechText);
          console.log(text);
        })
        // speechSynth.speak(speechText);
        // console.log(speechSynth.pending);
      }

      if (key === 86) { //shift + v
        speechSynth.cancel();
        console.log(speechSynth.pending);
      }
    },

    splitText: function (text) {
      // get length of full text
      console.log("Get full length " + text.length);     
      
      // 200 ~ Character API Limit
      var textSpeeachLimit = 200;      

      // get length number for loop
      var maxLength = Math.ceil(text.length / textSpeeachLimit);
      var next = 0
      var array = []
      var text;

      for (var i = 0; i < maxLength; i++) {
        console.log(i);
        console.log("Text sliced " + text.slice(0 + next, textSpeeachLimit + next));
        array.push(text.slice(0 + next, textSpeeachLimit + next));
        next = next + textSpeeachLimit;
        console.log(next + " next number");
      }
      return array;
    }
  };

  text2speech.init();

})();