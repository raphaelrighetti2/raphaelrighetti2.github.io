const hamburgerMenuButton = document.querySelector('[data-js="hamburger-menu__button"]');
const myProjectsButton = document.querySelector('[data-js="my-projects__button"]');
const mainHeaderNav = document.querySelector('[data-js="main-header__nav"]');
const mainHeaderList = document.querySelector('[data-js="main-header__nav-list"]');
const myProjectsMenu = document.querySelector('[data-js="my-projects__menu"]');
const myProjectsNav = document.querySelector('[data-js="my-projects"]');
const myProjectsList = document.querySelector('[data-js="my-projects__list"]');
const line1 = document.querySelector('[data-js="line-1"]');
const line2 = document.querySelector('[data-js="line-2"]');
const line3 = document.querySelector('[data-js="line-3"]');

function showNavMenu() {
  mainHeaderNav.classList.toggle('active');
  line1.classList.toggle('active');
  line2.classList.toggle('active');
  line3.classList.toggle('active');
  myProjectsMenu.classList.remove('active');
  myProjectsNav.classList.remove('active');
  mainHeaderList.classList.remove('active');
  myProjectsList.classList.remove('active');
}
function showMyProjectsNavMenu() {
  myProjectsNav.classList.toggle('active');
  myProjectsMenu.classList.toggle('active');
  myProjectsList.classList.remove('active');
}
function showMainHeaderList() {
  mainHeaderList.classList.add('active');
}
function showMyProjectsList() {
  myProjectsList.classList.add('active');
}

hamburgerMenuButton.addEventListener('click', showNavMenu);
myProjectsButton.addEventListener('click', showMyProjectsNavMenu);
mainHeaderNav.addEventListener('transitionend', showMainHeaderList);
myProjectsMenu.addEventListener('transitionend', showMyProjectsList);