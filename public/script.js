console.log("Welcome to Audix Music Player!");

// Initialize the Variables
let songIndex = 0;
let audioElement = document.getElementById('audioPlayer');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Dhun - (Saiyaara)", filePath: "songs/dhun.mp3", coverPath: "saiyaara.jpg" },
    { songName: "Ghungroo - (War)", filePath: "songs/2.mp3", coverPath: "war.jpg" },
    { songName: "Ho gaya hai Tujhko Pyaar - (DDLJ)", filePath: "songs/3.mp3", coverPath: "ddlj.jpg" },
    { songName: "Ishq Shava - (Jab Tak Hai Jaan)", filePath: "songs/4.mp3", coverPath: "Jab tak hai jaan.jpg" },
    { songName: "Dard Karaara - (Dum Laga Ke Haisha)", filePath: "songs/5.mp3", coverPath: "dum lagakr.jpg" },
    { songName: "Besharam Rang - (Pathaan)", filePath: "songs/6.mp3", coverPath: "pathaan.jpg" },
    { songName: "Tujhme Rab Dikhta Hai - (Rab Ne Bana Di Jodi)", filePath: "songs/7.mp3", coverPath: "rab ne banadi.jpg" },
    { songName: "Jag Ghoomeya - (Sultan)", filePath: "songs/8.mp3", coverPath: "sultan.jpg" },
    { songName: "Barbaad - (Saiyaara)", filePath: "songs/9.mp3", coverPath: "saiyaara.jpg" },
    { songName: "Challa - (Jab Tak Hai Jaan)", filePath: "songs/10.mp3", coverPath: "Jab tak hai jaan.jpg" },
];

songItems.forEach((element, i) => {
  console.log(element, i);
    // Set song name and cover image for each song item
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audioElement.play();

// Handle Play/Pause Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1; // Show the GIF when playing
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0; // Hide the GIF when paused
    }
});

// Attach timeupdate to audioElement, not progressBar
audioElement.addEventListener('timeupdate', () => {
    
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  });
}

 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
      element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
      });
    });

    document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});

document.getElementById('previous').addEventListener('click', () => { 
    if (songIndex <= 0) {
        songIndex = 9;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});


