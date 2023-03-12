var currentImgIndex=1;
var ImgSrcArray = [ //caminho das suas imgs aqui
'../Images/Vector (2).svg',
'../Images/Vector (1).svg'
];
// FUNCTION PRODUTO 1
function clickCheck(){

  if(currentImgIndex == ImgSrcArray.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    currentImgIndex=0;
  }
  document.getElementById("imagem").src=ImgSrcArray[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
    currentImgIndex++; // incrementa a nossa referencia

}

var currentImgIndex=1;
var ImgSrcArray = [ //caminho das suas imgs aqui
'../Images/Vector (2).svg',
'../Images/Vector (1).svg'
];
// FUNCTION PRODUTO 1
function clickCheck2(){

  if(currentImgIndex == ImgSrcArray.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    currentImgIndex=0;
  }
  document.getElementById("imagem2").src=ImgSrcArray[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
    currentImgIndex++; // incrementa a nossa referencia

}

