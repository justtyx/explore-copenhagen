const navSlide = () => {
    const burger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav a");
    //toggle nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

    //animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
    }
});

    //burger animation
    burger.classList.toggle("toggle");
});
}

navSlide();