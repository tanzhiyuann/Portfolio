
// >> ---------- NAVIGATION (NAV) BAR ---------- <<
document.addEventListener("scroll",function(){
    const navbar = document.querySelector(".navbar");
    const navbarHeight = 20;
    const distTop = Math.abs(document.body.getBoundingClientRect().top);
    
    if (distTop >= navbarHeight) navbar.classList.add("sticky");
    else navbar.classList.remove("sticky");

});

// >> NAVIGATION (NAV) BAR [MOBILE] <<
console.log('loaded');
var burger = document.getElementById("hamburger");
var menu = document.querySelector(".menu");
let i = 0;
burger.addEventListener("click", function(){
    
    i++; // if clicked once, number is odd thus, menu is open. <<
    if (i%2 === 0){
        console.log('menu closed');
        menu.style.left = "-100vw"; //Moves menu out of visible document first
        setTimeout(function(){menu.classList.remove("open");},200); //Hides menu after 2 seconds. (display = "none";)
    }
    else{ 
        console.log('menu open');
        menu.classList.add("open"); //Displays menu first (initial position = -100vw (outside of visible document))
        setTimeout(function(){menu.style.left = "0vw";},200); //Moves the menu to position 0, (Basically slides in because of transition in CSS)
        
    }
});

// >> ---------- Fade Scroll ---------- <<
const fade = document.querySelectorAll(".fade-in");
const FadeThreshold = {
    threshold: 0.2 //Only appear if 20% of the entity is visible
};

const scrollFadeIn = new IntersectionObserver(function(entries,scrollFadeIn){
    entries.forEach(function(entity){
        if (!entity.isIntersecting){
            return;
        }
        else{
            entity.target.classList.add("appear");
            scrollFadeIn.unobserve(entity.target);
        }
    });
}, FadeThreshold);

// runs the function and check if object is in view
fade.forEach(function(fade){
    scrollFadeIn.observe(fade);
});