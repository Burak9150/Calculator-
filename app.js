let düğme = document.getElementsByTagName("span");
let ekran2 = document.getElementById("ekran2");
let hesapla = document.getElementById("hesapla");
let temizle = document.getElementById("temizle");
let ekran1 = document.getElementById("ekran1");
let artıeksi = document.getElementById("artıeksi");
let yüzde = document.getElementById("yüzde");
let düğme1 = document.getElementsByClassName("content");
// let eşit=document.getElementById("hesapla")

for (let i = 0; i < 19; i++) {
  if (i != 0 && i != 1 && i != 2 && i != 18) {
    düğme1[i].addEventListener("click", yazdır);
    // console.log(düğme[i]);
  }
}
hesapla.addEventListener("click", Hesapla);
temizle.addEventListener("click", temizle1);
yüzde.addEventListener("click", bb);
let t = "";
let y = [0];
let z = [""];
function yazdır() {
  if (
    this.innerText != "+" &&
    this.innerText != "-" &&
    this.innerText != "x" &&
    this.innerText != "/"
  ) {
    t += this.innerText;
    ekran2.innerHTML = t;
  } else {
    if (z[0] == "" || z[0] == "+") {
      y[0] = y[0] + parseFloat(t);

      console.log(y);
    } else if (z[0] == "" || z[0] == "-") {
      y[0] = y[0] - parseFloat(t);

      console.log(y);
    } else if (z[0] == "" || z[0] == "x") {
      y[0] = y[0] * parseFloat(t);

      console.log(y);
    } else if (z[0] == "" || z[0] == "/") {
      y[0] = y[0] / parseFloat(t);

      console.log(y);
    }
    ekran1.innerText = y[0] + this.innerText;
    ekran2.innerText = "";

    t = "";

    z[0] = this.innerText;
    console.log(z);
  }
}

function Hesapla() {
  switch (z[0]) {
    case "+":
      v = y[0] + parseFloat(t);
      ekran2.innerHTML = v;
      //   console.log(v);

      break;

    case "-":
      v = y[0] - parseFloat(t);
      ekran2.innerHTML = v;
      //   console.log(v);
      break;

    case "x":
      v = y[0] * parseFloat(t);
      ekran2.innerHTML = v;
      //   console.log(v);
      break;

    case "/":
      v = y[0] / parseFloat(t);
      ekran2.innerHTML = v;
      //   console.log(v);
      break;
    case "+/-":
      v = parseFloat(y[0]);
    default:
      v = "ERROR";
      console.log(v);
      ekran2.innerHTML = v;
      break;
  }

  t = "";

  ekran1.innerText = "";
  y = [0];
}

function bb() {
  t += this.innerText;
  ekran2.innerHTML = parseFloat(t) / 100;
  t = parseFloat(ekran2.innerHTML);
  ekran1.innerText = "";
}
function temizle1() {
  t = "";
//   y = [0];
  ekran2.innerText = "";
    //  ekran1.innerText = "";
  console.log(y);
}
