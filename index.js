let flag = 0;
let beforeval;
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
function dark() {
  let dark = document.body;
  dark.classList.toggle("dark");
  let d = document.getElementById("name");
  d.classList.toggle("nameindaek");
}
function back() {
  if (flag == 1) {
    DEL();
  }
  display.innerHTML = display.textContent.slice(0, length - 1);
}

function DEL() {
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
  if (display.textContent[0] == "." && display.textContent[1] == ".") {
    display.innerHTML = `Erorr`;
  }
  if (display.textContent[0] == "0") {
    display.innerHTML = display.textContent.slice(
      1,
      display.textContent.length
    );
  }
  if (display.textContent[0] == "*" || display.textContent[0] == "/") {
    display.innerHTML = `Erorr`;
  }

  // console.log(beforeval); //
  else {
    display.innerHTML = eval(display.textContent);
  }
  flag = 1;
  // console.log(typeof +display.textContent); //console

  ans = +display.textContent;
}

function inser(m) {
  if (display.textContent.length <= 20) {
    // console.log(flag);
    // console.log(m.textContent);
    if (flag == 1) {
      if (
        m.textContent == "1" ||
        m.textContent == "2" ||
        m.textContent == "3" ||
        m.textContent == "4" ||
        m.textContent == "5" ||
        m.textContent == "6" ||
        m.textContent == "7" ||
        m.textContent == "8" ||
        m.textContent == "9" ||
        m.textContent == "0" ||
        m.textContent == "."
      ) {
        display.innerHTML = "";
      }
    }
    display.innerHTML += m.textContent;
    flag = 0;
  }
}

function getans() {
  if (display.textContent.length <= 20) {
    let d = display.textContent.toString();
    console.log(d[d.length - 1]);
    if (d == "") {
      display.innerHTML = "";
    } else if (
      d[d.length - 1] == "1" ||
      d[d.length - 1] == "2" ||
      d[d.length - 1] == "3" ||
      d[d.length - 1] == "4" ||
      d[d.length - 1] == "5" ||
      d[d.length - 1] == "6" ||
      d[d.length - 1] == "7" ||
      d[d.length - 1] == "8" ||
      d[d.length - 1] == "9" ||
      d[d.length - 1] == "0"
    ) {
      display.innerHTML += "*" + ans;
    } else {
      display.innerHTML += ans;
    }
  }
}
