"use strict";

// Generate randon number 1 - 20
let secretNumber = Math.floor(Math.random() * 20) + 1;

//Score
let score = 20;
let highScore = 0;

//refactored querySelector function
let displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

//Event Handler
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔️ Input a number!";
    displayMessage("⛔️ Input a number!"); // refactored

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎊 Congratulations you have guessed my number! 🎊");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
    }

    document.querySelector(".highscore").textContent = highScore;

    // When  guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? " ⬇️ Too High!" : "⬇️ Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(" ❌ YOU HAVE LOST THE GAME! ");
    }
  }
});

// Reset game (again btn)
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = null;
  document.querySelector("body").style.backgroundColor = "rgb(11, 2, 70)";
  document.querySelector(".number").style.width = "15rem";
});
