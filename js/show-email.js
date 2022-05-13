const emailImage = document.querySelector('[data-js="contact__email__image"]');
const email = document.querySelector('[data-js="email"]');
const emailCloseButton = document.querySelector('[data-js="email__close-button"]');

function showEmail() {
  email.classList.toggle('active');
  document.body.classList.toggle('height-active');
}
function hideEmail() {
  email.classList.remove('active');
  document.body.classList.remove('height-active');
}

emailImage.addEventListener('click', showEmail);
emailCloseButton.addEventListener('click', hideEmail);