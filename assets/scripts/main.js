// main.js
var audio = document.getElementById("horn-sound");
var textIndicator = document.getElementById("volume-number").value;
var sliderBar = document.getElementById("volume-slider");

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector.apply('#volume-number').onchange = set_slider_bar_val;
}, false);

function set_slider_bar_val(event){
    sliderBar.value = event.target.value;
    audio.volume = event.target.value;
}
// TODO
