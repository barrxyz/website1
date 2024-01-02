function displayTime() {
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var amOrPm = "AM";
    if(hour >= 12)
    {
        amOrPm = "PM";
    }
    if(hour > 12)
    {
        hour = hour - 12;
    }
    if(hour < 10)
        hour = "0" + hour;
    if(min < 10)
        min = "0" + min;
    if(sec < 10)
        sec = "0" + sec;
    document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec + " " + amOrPm; 
    
}
setInterval(displayTime, 1000) ;


// scripts.js
const audio = document.getElementById('audio');
const title = document.querySelector('h1');

// Fungsi untuk memutar audio
function playMusic() {
  audio.play();
}

// Fungsi untuk memberhentikan audio
function pauseMusic() {
  audio.pause();
}

// Memainkan audio saat judul lagu diklik
title.addEventListener('click', function() {
  playMusic();
});

