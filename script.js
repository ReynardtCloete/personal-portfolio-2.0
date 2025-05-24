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

//TORCH OVERLAY///////////////////////////////////////////////////////////////////

const torchOverlay = document.getElementById('torch-overlay');

document.addEventListener('mousemove', (e) => { //This function (e) => runs everytime the mouse moves//
  const x = e.clientX;                          //Extracts cursor's position//
  const y = e.clientY;                          //Extracts cursor's position//
  torchOverlay.style.background = `
    radial-gradient(circle at ${x}px ${y}px,
      rgba(29, 46, 202, 0.3) 0px,
      rgba(29, 46, 202, 0.25) 100px,
      rgba(29, 46, 202, 0.15) 200px,
      rgba(29, 46, 202, 0.1) 300px,
      transparent 500px)
  `;
});


});