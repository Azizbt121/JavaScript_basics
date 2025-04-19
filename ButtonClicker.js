var login=document.querySelector(".login button");
var defi=document.querySelector(".AddDefinition button");
var like=document.querySelector(".likes button");


login.onclick=function(){
    if (login.innerHTML === 'Login') {
        login.innerHTML = 'Logout';
    }else {
        login.innerHTML = 'Login';
    }
}

defi.onclick=function(){
    defi.style.display = 'none';
}

like.onclick=function(){
    alert("a ninja was liked when clicking a like button")
}