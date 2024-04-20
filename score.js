// Iteration 8: Making scoreboard functional

const ScoreBoard=document.getElementById('score-board');
 const PlayAgain=document.getElementById('play-again-button');
 const urlParams = new URLSearchParams(window.location.search);
 const score = urlParams.get('score');
 
 ScoreBoard.textContent=score;
 PlayAgain.onclick=()=>{
 
    window.location.href='game.html';
 }
 
