var city = document.querySelector(".options button");

city.onclick=function(){
    alert("alert!!!!!")
}

var btn=document.getElementById("acceptBtn")


btn.addEventListener("click", function() {
    document.getElementById("cookieFooter").style.display = "none";
});



var tempSelector = document.getElementById("tempe");
var todDisplay = document.getElementById("todayValues");
var tomDisplay = document.getElementById("tomorrowValues");
var firDisplay =document.getElementById("fridayValues");
var satDisplay =document.getElementById("saturdayValues");



tempSelector.addEventListener("change", function() {
    var selected = tempSelector.value;

    if (selected === "first") {  
        todDisplay.textContent = "24°  18°";
        tomDisplay.textContent = "27°  19°";
        firDisplay.textContent = "21°  16°";
        satDisplay.textContent = "26°  21°";

    } else { 
        todDisplay.textContent = "75°  65°";
        tomDisplay.textContent = "80°  66°";
        firDisplay.textContent = "69°  61°";
        satDisplay.textContent = "78°  70°";
    }
});
