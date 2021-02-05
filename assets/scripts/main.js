// main.js
var audio = document.getElementById("horn-sound");
var textIndicator = document.getElementById("volume-number");
var sliderBar = document.getElementById("volume-slider");
var volumeImg = document.getElementById("volume-image");
var airHorn = document.getElementById("radio-air-horn");
var carHorn = document.getElementById("radio-car-horn");
var partyHorn = document.getElementById("radio-party-horn");
var button = document.getElementById("honk-btn")

/*
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#volume-number').onchange = set_slider_bar_val;
    document.querySelector('#volume-slider').onchange = set_text_indicator_val;
    document.querySelector('#radio-air-horn').onchange = set_air_horn;
    document.querySelector('#radio-car-horn').onchange = set_car_horn;
    document.querySelector('#radio-party-horn').onchange = set_party_horn;
    document.querySelector('#honk-btn').onclick = function() { audio.play() }
}, false);*/

document.getElementById("#volume-number").onchange = set_slider_bar_val;
document.getElementById('#volume-slider').onchange = set_text_indicator_val;
document.getElementById('#radio-air-horn').onchange = set_air_horn;
document.getElementById('#radio-car-horn').onchange = set_car_horn;
document.getElementById('#radio-party-horn').onchange = set_party_horn;
document.getElementById('#honk-btn').onclick = function() { audio.play() }

function set_slider_bar_val(event){
    sliderBar.value = event.target.value;
    audio.volume = event.target.value/100.0;
    button.disabled = false;
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
        button.disabled = true
    }
}

function set_text_indicator_val(event){
    textIndicator.value = event.target.value;
    audio.volume = event.target.value/100.0;
    button.disabled = false;
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
        button.disabled = true
    }
}

function set_air_horn(event){
    if (event.target.value){
        audio.src = "assets/media/audio/air-horn.mp3"
    }
}

function set_car_horn(event){
    if (event.target.value){
        audio.src = "assets/media/audio/car-horn.mp3"
    }
}

function set_party_horn(event){
    if (event.target.value){
        audio.src = "assets/media/audio/party-horn.mp3"
    }
}
// TODO
