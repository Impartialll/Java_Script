let a = "";
let b = "";
let sign = "";
let oper = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

const out = document.querySelector(".calc-screen p");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
  console.log(0, 0, 0);
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";

  const key = event.target.textContent;

  // if press 0-9
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      checkLog();
      out.textContent = a;
      return;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }

    checkLog();
    return;
  }

  // if press + -
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    checkLog();
    return;
  }
  // if press %
  if (key === "%") {
    oper = key;
    if (a !== "" && b === "") {
      a = a / 100;
      out.textContent = a;
      checkLog();
      oper = "";
      return;
    } else if (b !== "" && finish) {
      a = a / 100;
      out.textContent = a;
      checkLog();
      oper = "";
      return;
    } else {
      b = b / 100;
      out.textContent = b;
      checkLog();
      oper = "";
      return;
    }
    //   //check it
    // else if (a !== "" && b !== "") {
    //   a = b * (a / 100);
    //   finish = true;
    //   out.textContent = a;
    // }
  }

  //if press +/-
  //check it
  if (key === "+/-") {
    oper = key;
    if (a !== "" && b === "") {
      switch (Math.sign(a)) {
        case 1:
          a = -a;
          out.textContent = a;
          checkLog();
          break;
        case -1:
          a = Math.abs(a);
          out.textContent = a;
          checkLog();
          break;
      }
      oper = "";
      return;
    } else if (b !== "" && finish) {
      switch (Math.sign(b)) {
        case 1:
          a = -a;
          out.textContent = a;
          checkLog();
          break;
        case -1:
          a = Math.abs(a);
          out.textContent = a;
          checkLog();
          break;
      }
      oper = "";
      return;
    } else {
      switch (Math.sign(b)) {
        case 1:
          b = -b;
          out.textContent = b;
          checkLog();
          break;
        case -1:
          b = Math.abs(b);
          out.textContent = b;
          checkLog();
          break;
      }
      oper = "";
      return;
    }
    checkLog();
    // return;
  }

  // if press =
  if (key === "=") {
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        if (a < 0 && b < 0) {
          a = a + b;
        } else {
          a = a - b;
        }
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          alert("Eror :(\nIt is impossible to divide by zero.");
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
    }
    equalFunc();
  }

  function equalFunc() {
    finish = true;
    if (a !== "" && b === "") {
      out.textContent = a;
      return;
    }
    if (Number.isNaN(a)) {
      clearAll();
      alert("Eror\nIs Not a Number");
    } else {
      if (!Number.isInteger(a)) {
        a = a.toFixed(5).replace(/0*$/, "");
        out.textContent = a;
        if (a === "0.") {
          clearAll();
          alert("Eror\nToo small number.");
        }
        return;
      } else {
        out.textContent = a;
        return;
      }
    }
  }
  function checkLog() {
    console.log(a, b, sign, oper, finish);
  }
  checkLog();
};
