let düğme = document.getElementsByTagName("span");
let ekran = document.getElementById("ekran2");
let hesapla = document.getElementById("hesapla");
let temizle = document.getElementById("temizle");
let ekran1 = document.getElementById("ekran1");
let artıeksi = document.getElementById("artıeksi");
// let eşit=document.getElementById("hesapla")

for (let i = 0; i < 19; i++) {
  if (i != 0 && i != 1 && i != 2 && i != 18) {
    düğme[i].addEventListener("click", yazdır);
    console.log(düğme[i]);
  }
}
let önceki = "";
let sonraki = "";
let t = "";
let y = [];
function yazdır() {
  if (
    this.innerText != "+" &&
    this.innerText != "-" &&
    this.innerText != "x" &&
    this.innerText != "/"
  ) {
    t += this.innerText;
    ekran.innerHTML = t;

    console.log(t);
    y.push(this.innerText)
    console.log(y);
  } else {
      if(ekran1.innerText==""){
        ekran1.innerText = ekran.innerText + this.innerText;
        ekran.innerText = "";
        önceki = t;
        sonraki += this.innerText;
        t = "";
      }else{
        ekran1.innerText=parseFloat(y[0])+parseFloat(ekran.innerText)+this.innerText;
        ekran.innerText = "";
      }
   
  
  }
}
hesapla.addEventListener("click", aa);
temizle.addEventListener("click", () => (ekran.innerText = ""));

   artıeksi.addEventListener("click",bb)

   let düğme = document.getElementsByTagName("span");
   let ekran = document.getElementById("ekran2");
   let hesapla = document.getElementById("hesapla");
   let temizle = document.getElementById("temizle");
   let ekran1 = document.getElementById("ekran1");
   let artıeksi = document.getElementById("artıeksi");
   let yüzde = document.getElementById("yüzde");
   // let eşit=document.getElementById("hesapla")
   
   for (let i = 0; i < 19; i++) {
     if (i != 0 && i != 1 && i != 2 && i != 18) {
       düğme[i].addEventListener("click", yazdır);
       // console.log(düğme[i]);
   
     }
    
   }
   
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
       ekran.innerHTML = t;
       
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
       ekran.innerText = "";
   
       t = "";
   
       z[0] = this.innerText;
       console.log(z);
       
     }
     
   }
   hesapla.addEventListener("click", aa);
   temizle.addEventListener("click",temizle1);
   
   yüzde.addEventListener("click", bb);
   // artıeksi.addEventListener("click", cc);
   
   function aa() {
     switch (z[0]) {
       case "+":
         v = y[0] + parseFloat(t);
         ekran.innerHTML = v;
         console.log(v);
   
         break;
   
       case "-":
         v = y[0] - parseFloat(t);
         ekran.innerHTML = v;
         console.log(v);
         break;
   
       case "x":
         v = y[0] * parseFloat(t);
         ekran.innerHTML = v;
         console.log(v);
         break;
   
       case "/":
         v = y[0] / parseFloat(t);
         ekran.innerHTML = v;
         console.log(v);
         break;
       case "+/-":
         v = parseFloat(y[0]);
       default:
         v = "ERROR";
         console.log(v);
         ekran.innerHTML = v;
         break;
     }
     
   
     t = "";
   
     ekran1.innerText = "";
     y = [0];
     console.log(y[0]);
    
   }
   
   function bb() {
     t += this.innerText;
     ekran.innerHTML = parseFloat(t) / 100;
     t = parseFloat(ekran.innerHTML);
     ekran1.innerText = "";
   
   }
   function temizle1(){
       // t += this.innerText;
       // ekran.innerHTML=-parseFloat(t)
        console.log( -parseFloat(t));
          t = "";
          y = [0];
          ekran.innerText = "";
          ekran1.innerText = "";
          console.log(y);
   
   
   }
