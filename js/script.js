
// >> ---------- NAVIGATION (NAV) BAR ---------- <<
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

// >> ---------- Fade Scroll ---------- <<
const fade = document.querySelectorAll(".fade-in");
const FadeThreshold = {
    threshold: 0.3 //Only appear if 1/3 of the entity is visible
};

const scrollFadeIn = new IntersectionObserver(function(entries,scrollFadeIn){
    entries.forEach(function(entity){
        if (!entity.isIntersecting){
            return;
        }
        else{
            entity.target.classList.add("appear");
            scrollFadeIn.unobserve(entity.target)
        }
    })
}, FadeThreshold);

// runs the function and check if object is in view
fade.forEach(function(fade){
    scrollFadeIn.observe(fade);
})