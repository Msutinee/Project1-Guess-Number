"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector(".number").textContent = secretNumber;
document.querySelector(".score").textContent = 12;
document.querySelector(".message").textContent = "✅Currect Number!";
document.querySelector(".highscore").textContent = 19;

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = document.querySelector(".guess").value;
// });
