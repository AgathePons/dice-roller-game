var app = document.getElementById('app');
var dealer = document.createElement('div');
dealer.classList.add('board');
dealer.id = 'dealer';
app.insertAdjacentElement('beforeend', dealer);

var chosenNbOfDice = 6;

/**
 * Fonction qui génère un dé 6 avec un nombre aléatoire et l'ajoute à l'élément ayant l'id player
 * @params {string} Le côté où on lancera le dé
 */
function addDice(side) {
  var dice = document.createElement('div');
  dice.classList.add('dice');
  var roll = generateRandomNumber();
  //console.log(roll);
  var position = `-${(roll - 1) * 100}px`;
  dice.style.backgroundPositionX = position;
  var board = document.getElementById(side);
  board.appendChild(dice);
  // on aurait pu utiliser insertAdjacentHTML pour plus de choix
  //board.insertAdjacentElement('beforeend', dice);

  dice.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('on a cliqué sur le dé');
  });
}

/**
 * Génère un nmbre aléatoire entre 1 et 6
 * @returns {number} le nombre aléatoire
 */
function generateRandomNumber() {
  return Math.round(Math.random() * (6 - 1) + 1);
}

/**
 * Lance un nombre de dés choisi par le user
 * @param {number} numberOfDices le nombre de dés qu'on veut lancer
 */
function throwDice(numberOfDices) {
  // plus besoin d'argument à resetBoard()
  //resetBoard('player');
  //resetBoard('dealer');
  resetBoard();
  for (var diceCount = 0; diceCount < numberOfDices; diceCount++) {
    addDice('player');
  }
  /**
   * setTimeout est une fonction qui prend:
   * - une fontion en 1er argument
   * - un temps en millisecondes en 2e argument
   */
  setTimeout(function () {
    for (var diceCount = 0; diceCount < numberOfDices; diceCount++) {
      addDice('dealer');
    }
  }, 1000);
}

/**
 * Fonction qui reset tous les boards
 */
function resetBoard() {
  //var board = document.getElementById(elementId);
  //board.innerHTML = "";
  // plus besoin de paramètre
  var boards = document.querySelectorAll('.board');
  for (var i = 0; i < boards.length; i++) {
    boards[i].innerHTML = "";
  }
}

var playButton = document.getElementById('play-button');

function startGame() {
  throwDice(chosenNbOfDice);
}

playButton.addEventListener('click', function(event) {
  event.stopPropagation();
  startGame(event);
});

// on selectionne le range input
var rangeInput = document.getElementById('dice-range');
rangeInput.value = `${chosenNbOfDice}`;

// on écout les change sur l'input
rangeInput.addEventListener('change', function(event) {
  console.log(event.target.value);
  chosenNbOfDice = parseInt(event.target.value);
})

document.body.addEventListener('keyup', function(event) {
  console.log(event);
  if (event.code.toLocaleLowerCase() === 'enter') {
    startGame();
  }
});

// attention au bubbling : un evennement qui se propage à ses parents, et donc qui peut déclencher d'autres événements
document.getElementById('app').addEventListener('click', function(event) {
  event.stopPropagation();
  console.log("on a cliqué sur app");
});

document.body.addEventListener('click', function() {
  console.log("on a cliqué sur le body");
  //resetBoard();
});





