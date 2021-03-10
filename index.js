const navLinks = document.getElementById('navLinks');
const burger = document.getElementById('burger');
const navs = document.querySelectorAll('.navLinks li');

burger.addEventListener('click' ,()=>{
    navLinks.classList.toggle('navLinksActive');
    burger.classList.toggle('toggle');

});
navs.forEach(link=>{
    link.addEventListener('click', ()=>{
        console.log('hello');
        navLinks.classList.toggle('navLinksActive');
        burger.classList.toggle('toggle');
    })
});


