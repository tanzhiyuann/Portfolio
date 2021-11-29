
// >> NAVIGATION (NAV) BAR <<
document.addEventListener("scroll",function(){
    const navbar = document.querySelector(".navbar");
    const navbarHeight = 20;
    const distTop = Math.abs(document.body.getBoundingClientRect().top);
    
    if (distTop >= navbarHeight) navbar.classList.add("sticky");
    else navbar.classList.remove("sticky");

});

// >> NAVIGATION (NAV) BAR [MOBILE] <<
console.log('loaded')
var burgor = document.getElementById("hamburger");
var menu = document.querySelector(".menu");
let i = 0;
burgor.addEventListener("click", function(){
    
    i++ // if clicked once, number is odd thus, menu is open. <<
    if (i%2 === 0){
        console.log('menu closed');
        menu.classList.remove("open");
    }
    else{ 
        console.log('menu open');
        menu.classList.add("open");
    }
    
    
})