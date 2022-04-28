"use strict";

// Generate randon number 1 - 20
let secretNumber = Math.floor(Math.random() * 20) + 1;

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
    document.querySelector(".number").textContent = secretNumber;

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

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "rgb(11, 2, 70)";
  document.querySelector(".number").style.width = "15rem";
});
// 2. In the handler function , restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input fields
// 4. Also restore the original background color(#222) and number width(15rem)
// GOOD LUCK 😀
