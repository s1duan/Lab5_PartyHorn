// main.js
var audio = document.getElementById("horn-sound");
var textIndicator = document.getElementById("volume-number").value;
console.log(textIndicator);
audio.volume = textIndicator;

// TODO
