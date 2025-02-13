function showSurprise() {
    let surpriseBox = document.getElementById("surprise-box");
    let song = document.getElementById("birthday-song");

    // Show surprise box
    surpriseBox.classList.remove("hidden");

    // Play song after skipping first 3 seconds
    song.currentTime = 2; // Skipping first 2 sec
    song.play();
}