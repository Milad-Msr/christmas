//// SHOW MENU 
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener('click', () => {navMenu.classList.add('show-menu')});
navClose.addEventListener('click', () => {navMenu.classList.remove('show-menu')});


//// REMOVE MENU MOBILE 
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((link) => {
  link.addEventListener('click', () => {navMenu.classList.remove('show-menu')});
});


//•/•/•/•/•/•/ CHANGE BACKGROUND HEADER \•\•\•\•\•\•\\
const scrollHandler = () => {
  const header = document.getElementById('header');

  this.scrollY >= 50 
  ? header.classList.add('bg-header') 
  : header.classList.remove('bg-header')
};

window.addEventListener('scroll', scrollHandler);


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  this.scrollY >= 350 
  ? scrollUp.classList.add('show-scroll')
  : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 58;
    const sectionId = section.getAttribute('id');
    const sectionsClass = document.querySelector(".nav-menu a[href*=' + sectionId + ']");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    };
  });
};




window.addEventListener('scroll', scrollActive);

/*=============== PARALLAX ===============*/


/*=============== GSAP ANIMATION ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
