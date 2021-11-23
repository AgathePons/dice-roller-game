/**
 * Fonction qui génère un dé 6 avec un nombre aléatoire et l'ajoute à l'élément ayant l'id player
 */
function addDice() {
  var dice = document.createElement('div');
  dice.classList.add('dice');
  var roll = generateRandomNumber();
  console.log(roll);
  dice.style.backgroundPositionX = `-${(roll - 1) * 100}px`;
  var player = document.getElementById('player');
  player.appendChild(dice);
  // on aurait pu utiliser insertAdjacentHTML pour plus de choix
  // player.insertAdjacentElement('beforeend', dice);
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
  resetBoard();
  for (var diceCount = 0; diceCount < numberOfDices; diceCount++) {
    addDice();
  }
}

function resetBoard() {
  var player = document.getElementById('player');
  player.innerHTML = "";
}

throwDice(3);
