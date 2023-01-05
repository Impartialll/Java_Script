let labelA = document.createElement("div");
labelA.textContent = "Вкажіть день за номером: ";
document.body.appendChild(labelA);
let inDay = document.createElement("input");
inDay.type = "text";
document.body.appendChild(inDay);

let labelB = document.createElement("div");
labelB.textContent = "Вкажіть місяць за номером: ";
document.body.appendChild(labelB);
let inMon = document.createElement("input");
inMon.type = "text";
document.body.appendChild(inMon);

let outputEl = document.createElement("div");
outputEl.textContent = "Ваш знак зодіаку: ";
document.body.appendChild(outputEl);

let butt = document.createElement("button");
butt.textContent = "Натисніть для виконання операції";
document.body.appendChild(butt);

butt.addEventListener("click", function () {
  console.log(inDay.value + "," + inMon.value);
  outputEl.textContent = "Ваш знак зодіаку: ";
  if (
    (inDay.value >= 24 && inDay.value <= 31 && inMon.value == 10) ||
    (inDay.value >= 1 && inDay.value <= 22 && inMon.value == 11)
  ) {
    outputEl.textContent += "скорпіон";
  }
  if (
    (inDay.value >= 21 && inDay.value <= 31 && inMon.value == 3) ||
    (inDay.value >= 1 && inDay.value <= 20 && inMon.value == 4)
  ) {
    outputEl.textContent += "овен";
  }
  if (
    (inDay.value >= 21 && inDay.value <= 30 && inMon.value == 4) ||
    (inDay.value >= 1 && inDay.value <= 21 && inMon.value == 5)
  ) {
    outputEl.textContent += "телець";
  }
  if (
    (inDay.value >= 22 && inDay.value <= 31 && inMon.value == 5) ||
    (inDay.value >= 1 && inDay.value <= 21 && inMon.value == 6)
  ) {
    outputEl.textContent += "близнюки";
  }
  if (
    (inDay.value >= 22 && inDay.value <= 30 && inMon.value == 6) ||
    (inDay.value >= 1 && inDay.value <= 22 && inMon.value == 7)
  ) {
    outputEl.textContent += "рак";
  }
  if (
    (inDay.value >= 23 && inDay.value <= 31 && inMon.value == 7) ||
    (inDay.value >= 1 && inDay.value <= 23 && inMon.value == 8)
  ) {
    outputEl.textContent += "лев";
  }
  if (
    (inDay.value >= 24 && inDay.value <= 31 && inMon.value == 8) ||
    (inDay.value >= 1 && inDay.value <= 22 && inMon.value == 9)
  ) {
    outputEl.textContent += "діва";
  }
  if (
    (inDay.value >= 23 && inDay.value <= 30 && inMon.value == 9) ||
    (inDay.value >= 1 && inDay.value <= 23 && inMon.value == 10)
  ) {
    outputEl.textContent += "терези";
  }
  if (
    (inDay.value >= 23 && inDay.value <= 30 && inMon.value == 11) ||
    (inDay.value >= 1 && inDay.value <= 21 && inMon.value == 12)
  ) {
    outputEl.textContent += "стрілець";
  }
  if (
    (inDay.value >= 23 && inDay.value <= 31 && inMon.value == 12) ||
    (inDay.value >= 1 && inDay.value <= 21 && inMon.value == 1)
  ) {
    outputEl.textContent += "козеріг";
  }
  if (
    (inDay.value >= 23 && inDay.value <= 31 && inMon.value == 1) ||
    (inDay.value >= 1 && inDay.value <= 21 && inMon.value == 2)
  ) {
    outputEl.textContent += "водолій";
  }
  if (
    (inDay.value >= 23 && inDay.value <= 31 && inMon.value == 2) ||
    (inDay.value >= 1 && inDay.value <= 21 && inMon.value == 3)
  ) {
    outputEl.textContent += "риби";
  }
});
