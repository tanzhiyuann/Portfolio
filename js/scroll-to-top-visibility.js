window.addEventListener("scroll",function(e){
    const element = document.getElementById("scroll-to-top");
    // console.log(window.pageYOffset)
    var docheight = document.body.offsetHeight;
    //Stops scrolling after word is not visible. (Prevents Overflow)

    var bottomoffset = 0;
    var viewwidth = "";
    var topOffset= 0;
    var bottomOffset = 0;
    if (screen.width <= 768){
        // Mobile
        bottomoffset = 1500;
        viewwidth = "90vw";
        bottomOffset = 400;
        topOffset = 500;
        if (screen.width <= 425){
            viewwidth = "80vw";
            topOffset = 720;
        }
    }
    else{
        //PC
        bottomoffset = 1500;
        viewwidth = "93vw";
        topOffset = 500;
        bottomOffset = 400;
    }

    if (window.pageYOffset >= topOffset && window.pageYOffset >= bottomOffset && window.pageYOffset < docheight-bottomoffset){
        element.style.display = "block";
        element.style.left = viewwidth;
    }
    else{
        document.getElementById("scroll-to-top").style.left = "110vw";
    }
});