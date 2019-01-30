var myVideo = document.getElementById("video"); 
var pp = document.getElementById("pp");
var bgsound = document.getElementById("bgsound");
var vol = 0.1;

function playPause() { 
    if (myVideo.paused){
        bgsound.pause();
        myVideo.play(); 
        pp.innerHTML='&#10074; &#10074;';
    }
    else {
        myVideo.pause();
        bgsound.play();
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
    bgsound.play();
    myVideo.currentTime = 0;
  }
  function mas10() { 
      if(myVideo.duration - myVideo.currentTime > 10){
        myVideo.currentTime = myVideo.currentTime + 10;
      }
      else{
          myVideo.currentTime = myVideo.duration;
      }
  } 
  function menos10() { if(myVideo.currentTime > 10){
    myVideo.currentTime = myVideo.currentTime - 10;
  }
  else{
      myVideo.currentTime = 0;
  }
  }  