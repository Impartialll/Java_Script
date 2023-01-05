let el2 = document.getElementById("out-2");
el2.innerHTML == "out-2"
  ? (el2.innerHTML = "")
  : alert("you have a big problem, body");
let backDoc = document.querySelector(".container");
let cube = document.querySelector(".inner");
let detail = document.getElementById("details");

cube.style.width = "100px";
cube.style.height = "100px";

function randomInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function consoleFunc(cbW, cbH) {
  detail.innerHTML = cbW + "x" + cbH;
  console.log(cbW + "x" + cbH);
}

document.body.addEventListener("click", function () {
  el2.innerHTML = randomInt(0, 100);
  backDoc.style.background = `rgb(${randomInt(0, 1000)},
  ${randomInt(0, 1000)},
  ${randomInt(0, 1000)})`;
  let bigW = parseFloat(cube.style.width);
  cube.style.width = bigW + 10 + "px";
  cube.style.height = bigW + 10 + "px";

  if (cube.style.width == "150px" && cube.style.height == "150px") {
    cube.style.width = "100px";
    cube.style.height = "100px";
  }

  consoleFunc(parseFloat(cube.style.width), parseFloat(cube.style.height));
});
