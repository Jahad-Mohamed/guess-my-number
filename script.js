"use strict";

// Generate randon number 1 - 20
const secretNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

//Score
let score = 20;

//Event Handler
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ Input a number!";

    // When player guesses the number
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "🎊 Congratulations you have guessed my number! 🎊";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // When  guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " ⬇️ Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        " ❌ YOU HAVE LOST THE GAME! ";
    }

    // When  guess is too high
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = " ⬇️ Too Low!";
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent =
      " ❌ YOU HAVE LOST THE GAME! ";
  }
});
