const ratingOptionButtons = document.querySelectorAll('[data-js="rating-options__button"]');
const submitButton = document.querySelector('[data-js="submit-button"]');
const userRatingSpace = document.querySelector('[data-js="user-rating-space"]');
const thankYouSection = document.querySelector('[data-js="thank-you"]');

let userRating = undefined;

function selectRating() {
  Array.prototype.forEach.call(ratingOptionButtons, function(element) {
    element.classList.remove('active');
  });
  this.classList.toggle('active');
  userRating = this.value;
}
function handleSubmit() {
  if(userRating === undefined) {
    alert('Please, select a rating from 1 to 5.');
    return;
  }
  let newTextNode = document.createTextNode(String(userRating));
  userRatingSpace.appendChild(newTextNode);
  thankYouSection.classList.toggle('active');
}

Array.prototype.forEach.call(ratingOptionButtons, function(element) {
  element.addEventListener('click', selectRating);
});
submitButton.addEventListener('click', handleSubmit);