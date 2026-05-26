/* MOBILE MENU */

const menuToggle = document.getElementById('menu-toggle');

const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {

navLinks.classList.toggle('active');

});

/* YEAR */

document.getElementById("year").innerHTML =
new Date().getFullYear();
