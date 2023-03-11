function clickInfo () {
var myImage = document.getElementById("flecha");
myImage.style.transition = 'all .5s ease-in-out'
    if (myImage.style.transform == 'rotate(180deg)' ) {
        myImage.style.transform = 'rotate(0deg)';
    }else{
        myImage.style.transform = 'rotate(180deg)'
    }
    if(menu.style.display == 'block' )  {
        menu.style.display = 'none'
    }else {
        menu.style.display ='block'
    }
 }
