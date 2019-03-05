var hamburger = document.getElementById("hamburger");
var hamburgerCloser = document.getElementById("hamburgerCloser");


var nav = document.getElementById("nav");
var listItems = nav.getElementsByTagName("a");

hamburger.addEventListener('click',function(){
    console.log("Function works");

    hamburger.style.display="none";
    hamburgerCloser.style.display="block";
   

    for(var i =0; i<listItems.length; i++){
        listItems[i].style.display="block";
    }

})

hamburgerCloser.addEventListener("click",function(){
    hamburger.style.display="block";
    hamburgerCloser.style.display="none";
   

    for(var i =0; i<listItems.length; i++){
        listItems[i].style.display="none";
    }
})