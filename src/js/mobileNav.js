const burgerButton = document.querySelector('.burger-icon');
const closeButton = document.querySelector('.close-item');
const navElement = document.querySelector('.mobile-side-nav');

burgerButton.addEventListener('click', (e) => {
    e.preventDefault();
    navElement.classList.remove('hide-menu');
    navElement.classList.add('show-menu');
});

closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    navElement.classList.remove('show-menu');
    navElement.classList.add('hide-menu');
})