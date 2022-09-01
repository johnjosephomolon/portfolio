const hamburger = document.querySelector('.berger');

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
});