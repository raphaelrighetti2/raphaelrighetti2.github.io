const raphaelRighettisPictures = document.querySelectorAll('[data-js="raphael-righetti__image"]');
const cardImages = document.querySelectorAll('[data-js="projects__card__image"]');
const biggerImageDiv = document.querySelector('[data-js="bigger-image"]');
const biggerImageCloseButton = document.querySelector('[data-js="bigger-image__button"]');
const biggerImage = document.querySelector('[data-js="bigger-image__image"]');


function showBiggerRaphaelRighettiImage() {
  biggerImageDiv.classList.toggle('active');
  document.body.classList.toggle('height-active');
  if(this.value === '1')
    biggerImage.src = './images/eu4.jpg';
}
function showBiggerProjectImage() {
  biggerImageDiv.classList.toggle('active');
  document.body.classList.toggle('height-active');
  if(this.value === '1')
    biggerImage.src = './images/projects-screenshots/tic-tac-toe-screenshot.jpg';
  if(this.value === '2')
    biggerImage.src = './images/projects-screenshots/interactive-rating-component-screenshot.jpg';
  if(this.value === '3')
    biggerImage.src = './images/projects-screenshots/alura-store-screenshot.jpg';
  if(this.value === '4')
    biggerImage.src = './images/projects-screenshots/apeperia-screenshot.jpg';
}
function hideBiggerImage() {
biggerImageDiv.classList.remove('active');
document.body.classList.remove('height-active');
}

Array.prototype.forEach.call(cardImages, function(element) {
  element.addEventListener('click', showBiggerProjectImage);
});
Array.prototype.forEach.call(cardImages, function(element, index) {
  element.value = String(index + 1);
});
Array.prototype.forEach.call(raphaelRighettisPictures, function(element) {
  element.addEventListener('click', showBiggerRaphaelRighettiImage);
});
Array.prototype.forEach.call(raphaelRighettisPictures, function(element, index) {
  element.value = String(index + 1);
});
biggerImageCloseButton.addEventListener('click', hideBiggerImage);