var colorChange = document.getElementById("darkmode");
var text = document.getElementsByTagName("p");
colorChange.addEventListener('click', function(){
    console.log("JS");
    colorChange.style.transition="background-color 1s";

    if (colorChange.classList.contains("dark")){
        colorChange.classList.remove('dark', 'darkcolorfont'); 
        colorChange.classList.add('light', 'lightcolorfont');
        colorChange.innerHTML='<img src="https://www.svgrepo.com/download/79251/crescent-moon.svg" alt="">'; 
    } else {
        colorChange.classList.remove('light', 'lightcolorfont'); 
        colorChange.classList.add('dark', 'darkcolorfont');
        colorChange.innerHTML='<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Sun_white_icon.svg/1200px-Sun_white_icon.svg.png" alt="">'; 
    }

    for (let i = 0; i < text.length; i++) {
        text[i].style.transition="color 1s"
        if (text[i].classList.contains("dark")){
        text[i].classList.remove('dark', 'darkcolortext');
        text.item(i).classList.add('light', 'lightcolortext');
        } else {
            text[i].classList.remove('light', 'lightcolortext');
            text.item(i).classList.add('dark', 'darkcolortext');    
     
        }
      }
})