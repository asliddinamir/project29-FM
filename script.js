const menuButton = document.querySelector('.menu');
const closeButton = document.querySelector('.close');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
    nav.classList.add('show-nav');
});

closeButton.addEventListener('click', () => {
    nav.classList.remove('show-nav')
})