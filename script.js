const score = document.getElementById("score");
const roll = document.getElementById("roll");
const playAgain = document.getElementById("playAgain");
const diceImage = document.getElementById("diceImage");

playAgain.style.display = "none";
score.textContent = "Total:";
let playerTotal = 0;

roll.addEventListener("click", () => {
  let currentRoll = Math.ceil(Math.random()*6);

  diceImage.style.display = "block";
  diceImage.src = `images/${currentRoll}.png`;

  playerTotal += currentRoll;
  score.textContent = `Total: ${playerTotal}`;

  if (playerTotal > 20) {
    score.textContent = `You scored ${playerTotal}! You win!`;

    playerTotal = 0;

    roll.style.display = "none";
    playAgain.style.display = "block";

  } else {
    if (currentRoll == 1) {
      score.textContent = "You rolled a 1 - You lose!"

      playerTotal = 0;

      roll.style.display = "none";
      playAgain.style.display = "block";
    }
  }
});

playAgain.addEventListener("click", () => {
  window.location.reload();
});