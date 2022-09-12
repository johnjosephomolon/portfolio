const hamburger = document.querySelector('.berger');
const hamburger_icon = document.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');


window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

       logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
       });

       setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1 )* 50)
            })
       }, 2000);

       setTimeout(()=>{
         intro.style.top = '-100vh';
       }, 2300);
    })
});

hamburger.addEventListener('click', () => {
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu' ?
    'close'
    : 'menu';
     
    mobile_menu.classList.toggle("is-open");
});

var type = new Typed(".job", {
    strings: ["Web Designer", "Front-end Designer", "Back-end Developer", "Full-Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})