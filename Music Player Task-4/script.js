const songs = [
  {
    title: "Sample Song 1",
    artist: "Artist 1",
    src: "song1.mp3"
  },
  {
    title: "Sample Song 2",
    artist: "Artist 2",
    src: "song2.mp3"
  }
];

let index = 0;
const audio = document.getElementById("audio");

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const playlist = document.getElementById("playlist");

// Load song
function loadSong(i) {
  audio.src = songs[i].src;
  title.textContent = songs[i].title;
  artist.textContent = songs[i].artist;
}
loadSong(index);

// Play/Pause
function playPause() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
}

// Next / Prev
function nextSong() {
  index = (index + 1) % songs.length;
  loadSong(index);
  audio.play();
}

function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
  audio.play();
}

// Progress bar
audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// Volume
volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

// Autoplay next
audio.addEventListener("ended", nextSong);

// Playlist
songs.forEach((song, i) => {
  const li = document.createElement("li");
  li.textContent = song.title;
  li.onclick = () => {
    index = i;
    loadSong(i);
    audio.play();
  };
  playlist.appendChild(li);
});
