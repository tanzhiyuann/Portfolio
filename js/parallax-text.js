// Parallax Text Effect for awards.html page
window.addEventListener("scroll",function(e){
    const word = document.querySelectorAll(".para-scroll")
    var exit = false;
    
    //Stops scrolling after word is not visible. (Prevents Overflow)
    if (window.pageYOffset > 674){
        exit = true;
    } 


    //Parallax effect (just changing position of the text)
    var i = 0;
    var length = word.length;

    if (exit === false){
        for (i; i < length; i++){
        var pos = window.pageYOffset * word[i].dataset.rate;
        word[i].style.transform = 'translate3d('+pos+'%,0px,0px)'
    }

    }
})