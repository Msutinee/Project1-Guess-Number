"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //   document.querySelector(".number").textContent = secretNumber;
  if (guess <= 0 || guess >= 21) {
    document.querySelector(".message").textContent =
      "Please enter between 1-20";
  } else if (guess === secretNumber) {
    if (score === 0) {
      document.querySelector(".message").textContent = "😥You Lose the game";
    } else if (score > 1) {
      document.querySelector(".message").textContent = "✅Currect Number!";
      score--;
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".score").textContent = score;
    }
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    document.querySelector("header").style.backgroundColor = "#2ECC71";
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "🔺It's too HIGH" : "🔻It's too LOW";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "😥You Lose the game";
    }
    document.querySelector("header").style.backgroundColor = "#E74C3C";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("header").style.backgroundColor = " #e9b57c";
});

// document.querySelector(".number").textContent = secretNumber;
// // document.querySelector(".score").textContent = 12;
// // document.querySelector(".message").textContent = "✅Currect Number!";
// // document.querySelector(".highscore").textContent = 19;

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = document.querySelector(".guess").value;
// });

// if (guess <= 0 && guess >= 21) {
//     document.querySelector(".message").textcontent = "I LOVE JIMMY";
//   }
