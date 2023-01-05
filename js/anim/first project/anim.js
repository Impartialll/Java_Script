// const countLab = document.getElementById("countLabel");
// let countUp = document.getElementById("countUp");
// let a = 0;

// let countDown = document.getElementById("countDown");
// let currentTime = parseFloat(countDown.textContent);

// function timeBomb() {
//   if (currentTime > 0) {
//     countDown.textContent = currentTime - 1;
//   } else {
//     window.clearInterval(timer);
//     countUp.textContent = a + 1;
//     currentTime = parseFloat(currentTime) + 5;
//   }
// }
// let timer = window.setInterval(timeBomb, 1000);

let countDown = document.getElementById("countDown");
let countUp = document.getElementById("countUp");

function timeDown() {
  let a = parseFloat(countDown.textContent);
  let b = parseFloat(countUp.textContent);
  if (a > 0) {
    countDown.textContent = a - 1;
  } else {
    clearInterval(timer);
  }
  b = 0;
}
let timer = window.setInterval(timeDown, 1000);

let info = document.getElementById("info");
function infoFunc() {
  info.innerHTML = ohnoes.style.width;
}

let ohnoes = document.getElementById("ohnoes");
ohnoes.style.width = "100px";

let startTime = new Date().getTime();

function makeItSmaller() {
  let currTimeSm = new Date().getTime();

  let newSmall = 100 - ((currTimeSm - startTime) / 1000) * 120;
  ohnoes.style.width = newSmall + "px";

  if (newSmall > 50) {
    requestAnimationFrame(makeItSmaller);
  }
}
makeItSmaller();
