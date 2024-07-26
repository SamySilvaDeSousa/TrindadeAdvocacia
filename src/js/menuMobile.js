const menuHamburger = document.querySelector('#menu-hamburger');
const navbarMobile = document.querySelector('#navbar-mobile');
const headerOverlay = document.querySelector('#header-overlay');
function toggleNavbar() {
    navbarMobile.classList.toggle('hidden');
    headerOverlay.classList.toggle('hidden');
    menuHamburger.classList.toggle('open');
}
menuHamburger.addEventListener('click', toggleNavbar);
headerOverlay.addEventListener('click', toggleNavbar);