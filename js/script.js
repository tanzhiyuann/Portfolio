
// >> NAVIGATION (NAV) BAR <<
document.addEventListener("scroll",function(){
    const navbar = document.querySelector(".navbar");
    const navbarHeight = 100;
    const distTop = Math.abs(document.body.getBoundingClientRect().top);
    
    if (distTop >= navbarHeight) navbar.classList.add("sticky");
    else navbar.classList.remove("sticky");

});