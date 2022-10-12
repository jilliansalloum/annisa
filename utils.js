
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const allItemsDiv = document.querySelector('#all-items')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})