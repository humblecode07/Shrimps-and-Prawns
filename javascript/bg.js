var audio = document.getElementById('audio');
var playMuteBtn = document.getElementById('playMuteBtn');
var count = 0;

function playMute() {
    if (count == 0) 
    {
        count = 1;
        audio.play();
    }
    else {
        count = 0;
        audio.pause();
    }
}

