var currentImgIndex=1;
var ImgSrcArray = [ //caminho das suas imgs aqui
'./Images/Vector (1).svg',
'./Images/Vector (2).svg'
];
// FUNCTION PRODUTO 1
function clickCheck(){

  if(currentImgIndex == ImgSrcArray.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    currentImgIndex=0;
  }
  document.getElementById("p510").src=ImgSrcArray[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
    currentImgIndex++; // incrementa a nossa referencia

}

