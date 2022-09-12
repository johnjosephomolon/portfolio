const hamburger = document.querySelector('.berger');
const hamburger_icon = document.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu' ?
    'close'
    : 'menu';
     
    mobile_menu.classList.toggle("is-open");
});