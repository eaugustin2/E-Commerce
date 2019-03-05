var shoppingCart = document.getElementById("shoppingCartDiv");
var badge = document.getElementById("badge");
var addToCartButton = document.getElementById("AddToCart");
var quantity = document.getElementById("quantity");
var answer;

addToCartButton.addEventListener('click',function(){
    console.log("badge num: " + badge.innerHTML);

    
    if(quantity.value == 0){
        alert("Please select a quantity greater than 0");
    }

    badge.innerHTML = quantity.value;
    
    if(typeof(storage)!== "undefined"){
        sessionStorage.setItem("shoppingCart", quantity.value);
        badge.innerHTML = sessionStorage.getItem("shoppingCart");
        console.log(sessionStorage.getItem("shoppingCart"));
    }
    
    console.log(sessionStorage.getItem("shoppingCart"));

});

