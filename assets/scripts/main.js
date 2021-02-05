// main.js
var audio = document.getElementById("horn-sound");
var textIndicator = document.getElementById("volume-number");
var sliderBar = document.getElementById("volume-slider");
var volumeImg = document.getElementById("volume-image");



document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#volume-number').onchange = set_slider_bar_val;
    document.querySelector('#volume-slider').onchange = set_text_indicator_val;
}, false);

function set_slider_bar_val(event){
    sliderBar.value = event.target.value;
    audio.volume = event.target.value/100.0;
    if (event.target.value >= 67) {
        volumeImg.src = "assets/media/icons/volume-level-3.svg"
    }
    else if (event.target.value >= 34) {
        volumeImg.src = "assets/media/icons/volume-level-2.svg"
    }
    else if (event.target.value >= 1) {
        volumeImg.src = "assets/media/icons/volume-level-1.svg"
    }
    else{
        volumeImg.src = "assets/media/icons/volume-level-0.svg"
    }
}

function set_text_indicator_val(event){
    textIndicator.value = event.target.value;
    audio.volume = event.target.value/100.0;
    if (event.target.value >= 67) {
        volumeImg.src = "assets/media/icons/volume-level-3.svg"
    }
    else if (event.target.value >= 34) {
        volumeImg.src = "assets/media/icons/volume-level-2.svg"
    }
    else if (event.target.value >= 1) {
        volumeImg.src = "assets/media/icons/volume-level-1.svg"
    }
    else{
        volumeImg.src = "assets/media/icons/volume-level-0.svg"
    }
}
// TODO
