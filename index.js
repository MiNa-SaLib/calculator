let bc = document.getElementById("buc");
let b1 = document.getElementById("bu1");
let b2 = document.getElementById("bu2");
let b3 = document.getElementById("bu3");
let b4 = document.getElementById("bu4");
let b5 = document.getElementById("bu5");
let b6 = document.getElementById("bu6");
let b7 = document.getElementById("bu7");
let b8 = document.getElementById("bu8");
let b9 = document.getElementById("bu9");
let b0 = document.getElementById("bu0");
let bs = document.getElementById("bus");
let bmin = document.getElementById("bu-");
let bm = document.getElementById("bum");
let bd = document.getElementById("bud");
let dote = document.getElementById("dote");
let mod = document.getElementById("mod");
let ans = document.getElementById("ans");

let display = document.getElementById("display");
function inser(m) {
  console.log(display.textContent[0]);
  display.innerHTML += m.textContent;
}
function back() {
  display.innerHTML = display.textContent.slice(0, length - 1);
}
function DEL() {
  ans = display.textContent;
  display.innerHTML = "";
}
function equal() {
  for (let i = 0; i < display.innerHTML.length; i++) {
    if (display.textContent[i] == display.textContent[i + 1]) {
      if (
        display.textContent[i] == "*" ||
        display.textContent[i] == "/" ||
        display.textContent[i] == "."
      ) {
        display.innerHTML = `Erorr`;
      }
      if (display.textContent[i] == "+" || display.textContent[i] == "-") {
        display.innerHTML = +display.textContent;
      }
    } else if (display.textContent[i] != display.textContent[i + 1]) {
      if (
        (display.textContent[i] == "*" && display.textContent[i + 1] == "/") ||
        (display.textContent[i] == "/" && display.textContent[i + 1] == "*") ||
        (display.textContent[i] == "+" && display.textContent[i + 1] == "*") ||
        (display.textContent[i] == "+" && display.textContent[i + 1] == "/") ||
        (display.textContent[i] == "-" && display.textContent[i + 1] == "*") ||
        (display.textContent[i] == "-" && display.textContent[i + 1] == "/")
      ) {
        display.innerHTML = `Erorr`;
      }
    }
  }
  if (display.textContent[0] == "." && display.textContent[1] == ".")
    display.innerHTML = `Erorr`;
  if (display.textContent[0] == "*" || display.textContent[0] == "/")
    display.innerHTML = `Erorr`;
  display.innerHTML = eval(display.textContent);
}
function getans() {
  if (ans.textContent == "Ans") display.innerHTML = "";
  else display.innerHTML = ans;
}
