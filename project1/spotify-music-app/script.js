const songData = [
  {
    name: "Latin Jazz",
    artist: "Sample #1",
    src: "Blazing Latin Jazz Inferno.mp3",
  },
  {
    name: "Cool Jazz",
    artist: "Sample #2",
    src: "City Lights Cool Jazz.mp3",
  },
  {
    name: "New Dawn Jazz",
    artist: "Sample #3",
    src: "New Dawn Jazz Rays.mp3",
  },
  {
    name: "New Beginnings",
    artist: "Sample #4",
    src: "Rays Of New Beginnings.mp3",
  },
];

const container = document.querySelector(".container");
const songName = document.querySelector(".song-name");
const songArtist = document.querySelector(".song-artist");
const cover = document.querySelector(".cover");
const playPauseBtn = document.querySelector(".play-pause");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const audio = document.querySelector(".audio");
const songTime = document.querySelector(".song-time");
const songProgress = document.querySelector(".song-progress");
const coverName = document.querySelector(".cover span:nth-child(1)");
const coverArtist = document.querySelector(".cover span:nth-child(2)");

document.getElementById("year").textContent = new Date().getFullYear();

let songIndex = 0;

window.addEventListener("load", () => {
  loadSong(songIndex);
});

const loadSong = (index) => {
  coverName.textContent = songData[index].name;
  coverArtist.textContent = songData[index].artist;
  songName.textContent = songData[index].name;
  songArtist.textContent = songData[index].artist;
  audio.src = `music/${songData[index].src}`;
};

const playSong = () => {
  container.classList.add("pause");
  playPauseBtn.firstElementChild.className = "fa-solid fa-pause";
  audio.play();
  cover.classList.add("rotate");
  cover.style.animationPlayState = "running";
};

const pauseSong = () => {
  container.classList.remove("pause");
  playPauseBtn.firstElementChild.className = "fa-solid fa-play";
  cover.style.animationPlayState = "paused";
  audio.pause();
};

playPauseBtn.addEventListener("click", () => {
  if (container.classList.contains("pause")) {
    pauseSong();
  } else {
    playSong();
  }
});

const prevSongPlay = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songData.length - 1;
  }
  cover.classList.remove("rotate");
  void cover.offsetWidth;
  loadSong(songIndex);
  playSong();
  cover.classList.add("rotate");
};

const nextSongPlay = () => {
  songIndex++;
  if (songIndex > songData.length - 1) {
    songIndex = 0;
  }
  cover.classList.remove("rotate");
  void cover.offsetWidth;
  loadSong(songIndex);
  playSong();
  cover.classList.add("rotate");
};

prevBtn.addEventListener("click", prevSongPlay);
nextBtn.addEventListener("click", nextSongPlay);

audio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  const currentTimeWidth = (currentTime / duration) * 100;
  songProgress.style.width = `${currentTimeWidth}%`;
  let songCurrentTime = document.querySelector(".time span:nth-child(1)");
  let songDuration = document.querySelector(".time span:nth-child(2)");

  audio.addEventListener("loadeddata", () => {
    audioDuration = audio.duration;

    totalMinutes = Math.floor(audioDuration / 60);
    totalSeconds = Math.floor(audioDuration % 60);

    if (totalSeconds < 10) {
      totalSeconds = `0${totalSeconds}`;
    }

    songDuration.textContent = `${totalMinutes} : ${totalSeconds}`;
  });
  let currentMinute = Math.floor(currentTime / 60);
  let currentSeconds = Math.floor(currentTime % 60);

  if (currentSeconds < 10) {
    currentSeconds = `0${currentSeconds}`;
  }

  songCurrentTime.textContent = `${currentMinute} : ${currentSeconds}`;
});

songTime.addEventListener("click", (e) => {
  let progressWidth = songTime.clientWidth;
  let clickedOffset = e.offsetX;
  let songDuration = audio.duration;
  audio.currentTime = (clickedOffset / progressWidth) * songDuration;
  playSong()
});

audio.addEventListener('ended', nextSongPlay)
