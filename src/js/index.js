var colorChange = document.getElementById("darkmode");
var text = document.getElementsByTagName("p");

colorChange.addEventListener('click', function(){
    for (let i = 0; i < text.length; i++) {
        text[i].style.transition="color 1s"
        colorChange.style.transition="background-color 1s";
        if (text[i].classList.contains("dark")){
        text[i].classList.remove('dark', 'darkcolortext');
        colorChange.classList.remove('dark', 'darkcolorfont'); 
        text.item(i).classList.add('light', 'lightcolortext');
        colorChange.classList.add('light', 'lightcolorfont');
        colorChange.innerHTML="Light Mode"; 
        } else {
            text[i].classList.remove('light', 'lightcolortext');
            colorChange.classList.remove('light', 'lightcolorfont'); 
            text.item(i).classList.add('dark', 'darkcolortext');    
            colorChange.classList.add('dark', 'darkcolorfont');
            colorChange.innerHTML="Dark Mode"; 
     
        }
      }
})