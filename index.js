const navLinks = document.getElementById('navLinks');
const burger = document.getElementById('burger');

burger.addEventListener('click' ,()=>{
    navLinks.classList.toggle('navLinksActive');
    burger.classList.toggle('toggle');
});
