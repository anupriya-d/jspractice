const PI = Math.PI;

let r;
let c;

document.getElementById("btn").onclick = function () {
  r = document.getElementById("radCircle").value;
  r = Number(r);

  c = 2 * PI * r;

  console.log(c);

  document.getElementById(
    "answerLabel"
  ).textContent = `Circumference of circle is ${Math.floor(c)}`;
};

console.log(typeof r);