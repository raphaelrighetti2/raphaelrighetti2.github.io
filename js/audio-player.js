const songs = document.querySelectorAll('[data-js="song"]');
const timeRange = document.querySelectorAll('[data-js="song-time__range"]');
const volumeRange = document.querySelectorAll('[data-js="song-volume__range"]');
const currentTimeElements = document.querySelectorAll('[data-js="song__current-time"]');
const durationElements = document.querySelectorAll('[data-js="song__lasting-time"]');
const playStopButtons = document.querySelectorAll('[data-js="audio-player__play-stop-button"]');
const playStopButtonImage = document.querySelectorAll('[data-js="audio-player__play-stop-button__image"]');
const volumeButtons = document.querySelectorAll('[data-js="volume-button"]');
const volumeButtonImage = document.querySelectorAll('[data-js="volume-button__image"]');

const songObjects = [];
let playing = false;
let muted = false;
let intervalRunning = false

function playSong(value) {
  songs[value].play();
}
function stopSong(value) {
  songs[value].pause();
}
function muteSong(value) {
  songs[value].volume = 0;
  volumeRange[value].value = 0;
}
function unmuteSong(value) {
  songs[value].volume = Number(songObjects[value].volumeSet / 10);
  volumeRange[value].value = Number(songObjects[value].volumeSet);
}
function changePlayStopButtonImageWithStop(value) {
  playStopButtonImage[value].src = './images/audio-player/stop-button.png';
  playing = true;
}
function changePlayStopButtonImageWithPlay(value) {
  playStopButtonImage[value].src = './images/audio-player/play-button.png';
  playing = false;
}
function changeVolumeButtonWithMuted(value) {
  volumeButtonImage[value].src = './images/audio-player/sound-off.png';
  muted = true;
}
function changeVolumeButtonWithUnmuted(value) {
  volumeButtonImage[value].src = './images/audio-player/sound-on.png';
  muted = false;
}
function callSongLength() {
  showSongLength(this.value);
}
function showSongLength(index) {
  currentTimeElements[index].innerHTML = String(returnDuration(parseInt(songs[index].currentTime)));
  durationElements[index].innerHTML = String(returnDuration(parseInt(songs[index].duration) - parseInt(songs[index].currentTime)));
  songObjects[index].timeRangeMax = parseInt(songs[index].duration);
  timeRange[index].max = songObjects[index].timeRangeMax;
}
function returnDuration(durationSeconds) {
  let durationInSeconds = durationSeconds;
  let durationInMinutes = (durationInSeconds / 60).toFixed(2);
  let durationIntPart = Math.trunc(durationInMinutes);
  let durationFloatPart = (durationInMinutes - durationIntPart).toFixed(2);
  let durationRemainingSeconds = Math.round(durationFloatPart * 60);
  if(durationRemainingSeconds < 0) {
    durationIntPart--;
    durationRemainingSeconds += 59;
  }
  if(durationRemainingSeconds < 10) {
    return String(durationIntPart) + ':0' + String(durationRemainingSeconds);
  }
  return String(durationIntPart) + ':' + String(durationRemainingSeconds);
}
function handleInterval(value, stop) {
  const myInterval = setInterval(function() {
    showSongLength(value);
    timeRange[value].value = Math.round(songs[value].currentTime);
  }, 10);
  if(stop) {
    clearInterval(myInterval);
  }
}
function handlePlayStopClick() {
  if(playing === false) {
    changePlayStopButtonImageWithStop(this.value);
    playSong(this.value);
    handleInterval(this.value);
    return;
  }
  if(playing === true) {
    changePlayStopButtonImageWithPlay(this.value);
    stopSong(this.value);
    handleInterval(this.value, true);
    return;
  }
}
function handleVolumeClick() {
  if(muted === false) {
    changeVolumeButtonWithMuted(this.value);
    muteSong(this.value);
    return;
  }
  if(muted === true) {
    changeVolumeButtonWithUnmuted(this.value);
    unmuteSong(this.value);
    return;
  }
}
function handleTimeRangeInput() {
  songs[this.data].currentTime = this.value;
  showSongLength(this.data);
}
function handleVolumeRangeInput() {
  songs[this.data].volume = this.value / 10;
  songObjects[this.data].volumeSet = this.value;
}

Array.prototype.forEach.call(playStopButtons, function(element, index) {
  element.value = Number(index);
  element.addEventListener('click', handlePlayStopClick);
});
Array.prototype.forEach.call(volumeButtons, function(element, index) {
  element.value = Number(index);
  element.addEventListener('click', handleVolumeClick);
});
Array.prototype.forEach.call(songs, function(element, index) {
  songObjects.push({song: element, timeRangeMax: 100, volumeSet: 10});
  element.value = index;
  element.loop = false;
  element.addEventListener('loadedmetadata', callSongLength);
  const myTimeOut = setTimeout(function() {
    let timesFired = 0;
    showSongLength(index);
    if(timesFired >= 10) {
      clearTimeout(myTimeOut);
      return;
    }
    timesFired++;
  }, 250)
});
Array.prototype.forEach.call(timeRange, function(element, index) {
  element.addEventListener('input', handleTimeRangeInput);
  element.data = index;
  element.value = 0;
});
Array.prototype.forEach.call(volumeRange, function(element, index) {
  element.addEventListener('input', handleVolumeRangeInput);
  element.data = index;
  element.value = 10;
});