var button = document.querySelector(".likes button");
var likeCountSpan = document.getElementById("likeCount");

let count = 0;

button.addEventListener('click', function() {
    count += 1;  
    likeCountSpan.textContent = count;  
});