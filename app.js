// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
window.onload = function() {

document.getElementById("play-button").onclick= function() {
    window.location.href="game.html";
}
}