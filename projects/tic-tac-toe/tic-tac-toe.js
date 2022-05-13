const places = [
  document.querySelector('[data-js="place-1"]'),
  document.querySelector('[data-js="place-2"]'),
  document.querySelector('[data-js="place-3"]'),
  document.querySelector('[data-js="place-4"]'),
  document.querySelector('[data-js="place-5"]'),
  document.querySelector('[data-js="place-6"]'),
  document.querySelector('[data-js="place-7"]'),
  document.querySelector('[data-js="place-8"]'),
  document.querySelector('[data-js="place-9"]')
];

const markedPlaces = {
  '1': {textNode: undefined, value: ''},
  '2': {textNode: undefined, value: ''},
  '3': {textNode: undefined, value: ''},
  '4': {textNode: undefined, value: ''},
  '5': {textNode: undefined, value: ''},
  '5': {textNode: undefined, value: ''},
  '6': {textNode: undefined, value: ''},
  '7': {textNode: undefined, value: ''},
  '8': {textNode: undefined, value: ''},
  '9': {textNode: undefined, value: ''},
  resultNode: undefined
};

const buttons = document.querySelectorAll('[data-js="button"]');
const resetButton = document.querySelector('[data-js="reset-button"]');
const playAgainButton = document.querySelector('[data-js="play-again-button"]');
const questionMarkButton = document.querySelector('[data-js="question-mark-button"]');
const closeButton = document.querySelector('[data-js="close-button"]');

const howToPlay = document.querySelector('[data-js="how-to-play"]');
const gameEndBackground = document.querySelector('[data-js="game-end__background"]');
const gameEnd = document.querySelector('[data-js="game-end"]');

const gameWinnerElement = document.querySelector('[data-js="game-end__text"]');

let turn = 0;

function printX(place, btnValue) {
  const newTextNode = document.createTextNode('x');
  place.appendChild(newTextNode);
  markedPlaces[String(btnValue)].textNode = newTextNode;
  markedPlaces[String(btnValue)].value = 'x';
}
function printO(place, btnValue) {
  const newTextNode = document.createTextNode('o');
  place.appendChild(newTextNode);
  markedPlaces[String(btnValue)].textNode = newTextNode;
  markedPlaces[String(btnValue)].value = 'o';
}
function showMatchResult(result) {
  let newTextNode;
  gameWinnerElement.innerHTML = '';
  if(result === 'tie')
    newTextNode = document.createTextNode('Velha!');
  else if(result === 'x')
    newTextNode = document.createTextNode('Jogador 1 venceu!');
  else if(result === 'o')
    newTextNode = document.createTextNode('Jogador 2 venceu!');
  markedPlaces.resultNode = newTextNode;
  gameWinnerElement.appendChild(newTextNode);
}

function showHowToPlayAndSocials() {
  howToPlay.classList.toggle('active');
  gameEndBackground.classList.toggle('active');
}
function hideHowToPlayAndSocials() {
  howToPlay.classList.remove('active');
  gameEndBackground.classList.remove('active');
}
function showWinGameXWinner() {
  gameEndBackground.classList.add('active');
  gameEnd.classList.add('active');
  showMatchResult('x');
}
function showWinGameOWinner() {
  gameEndBackground.classList.add('active');
  gameEnd.classList.add('active');
  showMatchResult('o');
}
function showTieGame() {
  gameEndBackground.classList.add('active');
  gameEnd.classList.add('active');
  showMatchResult('tie');
}

function checkWinGame() {
  if(markedPlaces['1'].value === 'x' && markedPlaces['2'].value === 'x' && markedPlaces['3'].value === 'x') {
    showWinGameXWinner();
    return true;
  }
  if(markedPlaces['1'].value === 'o' && markedPlaces['2'].value === 'o' && markedPlaces['3'].value === 'o') {
    showWinGameOWinner();
    return true;
  } 
  if(markedPlaces['4'].value === 'x' && markedPlaces['5'].value === 'x' && markedPlaces['6'].value === 'x') {
    showWinGameXWinner();
    return true;
  }
  if(markedPlaces['4'].value === 'o' && markedPlaces['5'].value === 'o' && markedPlaces['6'].value === 'o') {
    showWinGameOWinner();
    return true;
  } 
  if(markedPlaces['7'].value === 'x' && markedPlaces['8'].value === 'x' && markedPlaces['9'].value === 'x') {
    showWinGameXWinner();
    return true;
  }
  if(markedPlaces['7'].value === 'o' && markedPlaces['8'].value === 'o' && markedPlaces['9'].value === 'o') {
    showWinGameOWinner();
    return true;
  }
  if(markedPlaces['1'].value === 'x' && markedPlaces['4'].value === 'x' && markedPlaces['7'].value === 'x') {
    showWinGameXWinner();
    return true;
  }
  if(markedPlaces['1'].value === 'o' && markedPlaces['4'].value === 'o' && markedPlaces['7'].value === 'o') {
    showWinGameOWinner();
    return true;
  }
  if(markedPlaces['2'].value === 'x' && markedPlaces['5'].value === 'x' && markedPlaces['8'].value === 'x') {
    showWinGameXWinner();
    return true;
  }
  if(markedPlaces['2'].value === 'o' && markedPlaces['5'].value === 'o' && markedPlaces['8'].value === 'o') {
    showWinGameOWinner();
    return true;
  }
  if(markedPlaces['3'].value === 'x' && markedPlaces['6'].value === 'x' && markedPlaces['9'].value === 'x') {
    showWinGameXWinner();
    return true;
  }
  if(markedPlaces['3'].value === 'o' && markedPlaces['6'].value === 'o' && markedPlaces['9'].value === 'o') {
    showWinGameOWinner();
    return true;
  }
  if(markedPlaces['1'].value === 'x' && markedPlaces['5'].value === 'x' && markedPlaces['9'].value === 'x') {
    showWinGameXWinner();
    return true;
  }
  if(markedPlaces['1'].value === 'o' && markedPlaces['5'].value === 'o' && markedPlaces['9'].value === 'o') {
    showWinGameOWinner();
    return true;
  }
  if(markedPlaces['3'].value === 'x' && markedPlaces['5'].value === 'x' && markedPlaces['7'].value === 'x') {
    showWinGameXWinner();
    return true;
  }
  if(markedPlaces['3'].value === 'o' && markedPlaces['5'].value === 'o' && markedPlaces['7'].value === 'o') {
    showWinGameOWinner();
    return true;
  }
  return false;
}
function checkTieGame() {
  let boolean = false;
  for(i = 1; i <= 9; i++) {
    if(markedPlaces[String(i)].value === '') {
      boolean = false;
      break;
  }
    if(markedPlaces[String(i)].value !== ''){
      boolean = true
    }
  }
  if(boolean === true)
    showTieGame();
  return boolean;
}
function endGame() {
  turn = 0;
  places.forEach(function(place, i) {
    if(markedPlaces[String(i + 1)].textNode !== undefined)
      place.removeChild(markedPlaces[String(i + 1)].textNode);
    markedPlaces[String(i + 1)].textNode = undefined;
    markedPlaces[String(i + 1)].value = '';
    place.classList.remove('x');
    place.classList.remove('o');
  });
  gameWinnerElement.removeChild(markedPlaces.resultNode);
  markedPlaces.resultNode = undefined;
  gameEndBackground.classList.remove('active');
  gameEnd.classList.remove('active');
}

function addMarker() {
  if(places[this.value - 1].hasChildNodes() === true) {
    return;
  }
  if(turn % 2 === 0) {
    places[this.value - 1].classList.toggle('x');
    printX(places[this.value - 1], this.value);
  }
  if(turn % 2 !== 0) {
    places[this.value - 1].classList.toggle('o');
    printO(places[this.value - 1], this.value);
  }
  checkWinGame();
  checkTieGame();
  if(checkTieGame() !== true || checkWinGame() !== true)
    turn++;
}

Array.prototype.forEach.call(buttons, function(button) {
  button.addEventListener('click', addMarker);
});
resetButton.addEventListener('click', endGame);
questionMarkButton.addEventListener('click', showHowToPlayAndSocials);
closeButton.addEventListener('click', hideHowToPlayAndSocials);
playAgainButton.addEventListener('click', endGame);