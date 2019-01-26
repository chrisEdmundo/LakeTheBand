var myVideo = document.getElementById("video"); 
var pp = document.getElementById("pp");
var vol = 0.1;

function playPause() { 
    if (myVideo.paused){
        myVideo.play(); 
        pp.innerHTML='&#10074; &#10074;';
    }
    else {
        myVideo.pause();
        pp.innerHTML='&#9658; ';
    }
  } 
  function volumeUp() { 
    if (myVideo.volume==1.0){
        myVideo.volume = myVideo.volume;
    }
    else {
        myVideo.volume = myVideo.volume + vol;
    }
  } 
  function volumeDown() { 
    if (myVideo.volume==0.0){
        myVideo.volume = myVideo.volume;
    }
    else {
        myVideo.volume = myVideo.volume - vol;
    }
  } 
  function Reset() { 
    myVideo.pause();
    myVideo.currentTime = 0;
  } 