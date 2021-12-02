window.addEventListener("scroll",function(e){
    const element = document.getElementById("scroll-to-top")
    console.log(window.pageYOffset)
    var docheight = document.body.offsetHeight
    //Stops scrolling after word is not visible. (Prevents Overflow)

    var bottomoffset = 0;
    if (screen.width <768){
        bottomoffset = 900;
    }
    else{

        bottomoffset = 800;
    }

    if (window.pageYOffset >= 400 && window.pageYOffset < docheight-bottomoffset){
        element.style.display = "block";
        
    }
    else{
        element.style.display = "none";
    }
});