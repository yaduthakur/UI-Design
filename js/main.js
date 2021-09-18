const hamburger = document.querySelector(".hamburger");
const primaryMenu = document.querySelector(".primary-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    primaryMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    primaryMenu.classList.remove("active");
}