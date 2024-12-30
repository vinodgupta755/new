// Get the audio element
const backgroundMusic = document.getElementById('background-music');

// Function to play the music
function playMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play()
            .then(() => console.log('Music is playing'))
            .catch(err => console.error('Autoplay prevented:', err));
    }
}

// Function to pause the music
function pauseMusic() {
    if (!backgroundMusic.paused) {
        backgroundMusic.pause();
    }
}

// Add event listener to ensure audio starts after user interaction
document.addEventListener('click', () => {
    playMusic(); // Trigger play after user clicks anywhere
});

// Set volume (optional, max is 1.0)
backgroundMusic.volume = 0.8;

// Log status of audio
backgroundMusic.addEventListener('play', () => console.log('Background music started.'));
backgroundMusic.addEventListener('pause', () => console.log('Background music paused.'));
backgroundMusic.addEventListener('ended', () => console.log('Background music ended.'));

// Add buttons for manual controls (optional)
document.querySelector('.play-button').addEventListener('click', playMusic);
document.querySelector('.pause-button').addEventListener('click', pauseMusic);

