var buttons = document.querySelectorAll(".likes");  
var likeCountSpans = document.querySelectorAll(".likeCount");  

buttons.forEach((element, index) => {
    let count = 0;  
    element.addEventListener('click', function() {
        count += 1;
        likeCountSpans[index].textContent = count;
    });
});