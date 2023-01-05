const abc = document.createElement("div");
const cba = document.createElement("div");
document.body.appendChild(abc);
document.body.appendChild(cba);

let someOj = {
  city: "Kyiv",
  mainFunc(what) {
    abc.textContent = what;
  },
};
let example = JSON.stringify(someOj);

abc.textContent = example;
cba.textContent = JSON.parse(example);
console.log(Array);
