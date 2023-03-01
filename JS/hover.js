document.addEventListener("DOMContentLoaded", function(){
   
    var links = document.querySelectorAll(".sobre-nos");
    for(let x=0; x < links.length; x++){
       
       links[x].onmouseover = function(){
          
          document.querySelector("#imagem img").src = this.querySelector("lado-esquerdo").src;
          
       }
       
    }
    
 });