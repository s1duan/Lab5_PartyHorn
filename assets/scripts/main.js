// main.js
var audio = document.getElementById("horn-sound");
var textIndicator = document.getElementById("volume-number");
var sliderBar = document.getElementById("volume-slider");

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#volume-number').onchange = set_slider_bar_val;
    document.querySelector('#volume-slider').onchange = set_text_indicator_val;
}, false);

function set_slider_bar_val(event){
    sliderBar.value = event.target.value;
    audio.volume = event.target.value;
}

function set_text_indicator_val(event){
    textIndicator.value = event.target.value;
    audio.volume = event.target.value;
}
// TODO
