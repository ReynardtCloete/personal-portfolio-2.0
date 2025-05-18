document.addEventListener('DOMContentLoaded', function () {

//BURGER//////////////////////////////////////////////////////////////////////////

    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navbar.classList.toggle('active');
    });

//NAVBAR//////////////////////////////////////////////////////////////////////////
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle("sticky", window.scrollY > 0)
})
/////////////////////////////////////////////////////////////////////////////////

});