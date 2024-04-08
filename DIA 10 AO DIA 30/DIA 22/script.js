function fundo(){
    let fundo = document.querySelector("body").style.backgroundColor;

if(fundo ==  "white"){
    document.querySelector("h2").style.color = "white";
     document.querySelector("body").style.backgroundColor = "#333333";
  
 }else{
    document.querySelector("h2").style.color = "black";
     document.querySelector("body").style.backgroundColor = "white";
 }
    }