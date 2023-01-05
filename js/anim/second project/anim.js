let butt = document.getElementById("clicker");
let block = document.querySelector(".block");
let info = (document.getElementById("info").textContent = "");

block.style.width = "200px";
block.style.height = "200px";

let setW = parseFloat(block.style.width);
let setH = parseFloat(block.style.height);

let timer;

info.textContent += block.style.width + "x" + block.style.height;

function makeItBigger() {
  console.log("first " + setW);
  if (setW < 300) {
    setW = setW + 1;
    setH = setH + 1;
    block.style.width = setW + "px";
    block.style.height = setH + "px";
  } else {
    clearInterval(timer);
  }

  console.log("second " + setW);
}

butt.addEventListener("click", function () {
  timer = setInterval(makeItBigger, 100);
});

console.log(block.style.width);
