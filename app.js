let düğme=document.getElementsByTagName("span")
let ekran=document.getElementById("ekran2")
let hesapla=document.getElementById("hesapla")
let temizle=document.getElementById("temizle")
let ekran1=document.getElementById("ekran1")
let artıeksi=document.getElementById("artıeksi")
// let eşit=document.getElementById("hesapla")

for(let i=0;i<19;i++){
    if(i!=0 && i!=1 && i!=2 && i!=18  ){
        düğme[i].addEventListener("click",yazdır)
        console.log(düğme[i]);
    }
}
let önceki=""
let sonraki=""
let t="";
    let y=0;
function yazdır(){
    
    if(this.innerText!="+" && this.innerText!="-" && this.innerText!="x" && this.innerText!="/"){
        t+=this.innerText
        ekran.innerHTML=t
       
    console.log(t);
    }else{
        ekran1.innerText=ekran.innerText+this.innerText
        ekran.innerText=""
        önceki=t
        sonraki+=this.innerText
        t=""
     
    }

    }
    hesapla.addEventListener("click",aa)
   temizle.addEventListener("click",()=>ekran.innerText="")
  

//    artıeksi.addEventListener("click",bb)




    
function aa(){
   
    
  
switch (sonraki){
 
   case "+":v= parseFloat(önceki)+parseFloat(t);ekran.innerHTML=v; console.log(v); break;
    
   case "-":v=  parseFloat(önceki)-parseFloat(t);ekran.innerHTML=v;console.log(v);  break;
    
   case "x":v= parseFloat(önceki)*parseFloat(t) ;ekran.innerHTML=v;console.log(v);  break;

   case "/":v= parseFloat(önceki)/parseFloat(t) ;ekran.innerHTML=v;console.log(v);  break;
    
   default: v= "ERROR";console.log(v);ekran.innerHTML=v;  break;
}  
        
önceki="";
t="";
sonraki=""
ekran1.innerText=""      
}

