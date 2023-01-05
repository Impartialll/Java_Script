let out = document.querySelector("#out");

document.querySelector("#btn").onclick = (event) => {
  out.textContent = "Output: ";
  let a = parseFloat(document.getElementById("first").value);
  let b = parseFloat(document.getElementById("second").value);

  const key = event.target.textContent;

  if (a !== "" && b !== "") {
    a = b * (a / 100);
    out.textContent += a;
    console.log(a, b);
    console.log("first IF");
    return;
  } else if (a !== "" && b === "") {
    b = 1;
    a = b * (a / 100);
    out.textContent += a;
    console.log(a, b);
    console.log("second IF");
    return;
  } else {
    a = 1;
    a = b * (a / 100);
    out.textContent += a;
    console.log(a, b);
    console.log("third IF");
    return;
  }
};
