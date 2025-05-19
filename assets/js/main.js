// SHOW MENU 
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener('click', () => {navMenu.classList.add('show-menu')});
navClose.addEventListener('click', () => {navMenu.classList.remove('show-menu')});



// REMOVE MENU MOBILE 
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((link) => {
  link.addEventListener('click', () => {navMenu.classList.remove('show-menu')});
});


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== PARALLAX ===============*/


/*=============== GSAP ANIMATION ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
