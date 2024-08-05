let progress = document.getElementById("music-progress");
let song = document.getElementById("song");
let source = document.getElementById("songSource");
let playicon = document.getElementById("playicon");
let image = document.getElementById("albumImage");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(playicon.classList.contains("fa-pause")){
        song.pause();
        playicon.classList.remove("fa-pause");
        playicon.classList.add("fa-play");
    }else{
        song.play();
        playicon.classList.remove("fa-play");
        playicon.classList.add("fa-pause");
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 1000);
}

song.onended = function(){
    song.pause();
    playicon.classList.remove("fa-pause");
    playicon.classList.add("fa-play");
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    playicon.classList.remove("fa-play");
    playicon.classList.add("fa-pause");
}

const playlist = [
        {audio : "media/KNAAN  Wavin Flag CocaCola Celebration Mix.mp3",
        img : "media/wavinflag.jpg",
        song: "Wavin' Flag",
        artist: "K'naan"},

        {audio : "media/Johnny B. Goode.mp3",
        img : "media/johnnyBgoode.jpg",
        song: "Johnny B. Goode",
        artist: "Chuck Berry"},

        {audio : "media/Hanumankind  Big Dawgs  Ft. Kalmi (Official Music Video)  Def Jam India.mp3",
        img : "media/bigDawgs.png",
        song: "Big Dawgs",
        artist: "Hanumankind, Kalmi"}
        ]

i = 0;

function nextSong(){
    if(i == 2){
        playicon.classList.remove("fa-pause");
        playicon.classList.add("fa-play");
        progress.value = 0;
        song.load();
    }
    else if (i < 2 && i >= 0){
        i += 1;
        playicon.classList.remove("fa-pause");
        playicon.classList.add("fa-play");
        data = playlist[i];
        source.src = data.audio;
        song.load();
        image.src = data.img;
        document.querySelector(".songName").innerHTML = data.song;
        document.querySelector(".artistName").innerHTML = data.artist;
    }
}

function previousSong(){
    if(i == 0){
        playicon.classList.remove("fa-pause");
        playicon.classList.add("fa-play");
        progress.value = 0;
        song.load();
    }
    else if (i >= 1 && i < 3){
        i -= 1;
        playicon.classList.remove("fa-pause");
        playicon.classList.add("fa-play");
        data = playlist[i];
        source.src = data.audio;
        song.load();
        image.src = data.img;
        document.querySelector(".songName").innerHTML = data.song;
        document.querySelector(".artistName").innerHTML = data.artist;
    }
}

progress.max = song.duration;