const header = document.querySelector('[data-js="cabecalho"]');
const menuButton = document.querySelector('[data-js="menu__button"]');
const navMenu = document.querySelector('[data-js="menu"]');

function toggleMenu() {
  navMenu.classList.toggle('active');
  header.classList.toggle('background');
}

menuButton.addEventListener('click', toggleMenu);