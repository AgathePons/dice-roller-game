// build two div class="dice"
var playerDiceDiv = document.createElement('div');
playerDiceDiv.classList.add('dice');
var dealerDiceDiv = document.createElement('div');
dealerDiceDiv.classList.add('dice');
// get the two players div
var playerDiv = document.getElementById('player');
var dealerDiv = document.getElementById('dealer');
// put the two div in html
playerDiv.appendChild(playerDiceDiv);
dealerDiv.appendChild(dealerDiceDiv);

// create a function to random a number between 1 and 6
function randomDiceSix() {
  return Math.round(Math.random() * (6 - 1) + 1);
}

// test randomDicesix()
function testRandom() {
  for (var i = 0; i < 100; i++) {
    console.log(randomDiceSix());
  }
}

/**
 * function to throw x dice(s) for the player or for the dealer
 * @param {number} numberOfThrow Number of throws we want 
 * @param {number} player player : 1 // dealer : 2
 */
function throwDice(numberOfThrow, player) {
  // check who is playing
  var divToPlay;
  if (player === 1) {
    divToPlay = playerDiceDiv;
  } else if (player === 2) {
    divToPlay = dealerDiceDiv;
  } else {
    console.log("Player can be 1 or 2");
  }
  for (var i = 0; i < numberOfThrow; i++) {
    var diceResult = randomDiceSix();
    console.log("dice:", diceResult);
    // check result and change background-position-x
    switch (diceResult) {
      case 1 :
        divToPlay.style.backgroundPositionX = "0";
        break;
      case 2 :
        divToPlay.style.backgroundPositionX = "500px";
        break;
      case 3 :
        divToPlay.style.backgroundPositionX = "400px";
        break;
      case 4 :
        divToPlay.style.backgroundPositionX = "300px";
        break;
      case 5 :
        divToPlay.style.backgroundPositionX = "200px";
        break;
      case 6 :
        divToPlay.style.backgroundPositionX = "100px";
        break;
      default :
        console.log("WTF");
    }
    
  }
}

throwDice(1, 1);