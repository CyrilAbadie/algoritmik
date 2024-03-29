const readLine = require('readline-sync');

/**
 * @name house-of-cards
 * @author Aélion - Nov 2019 - Cyril
 * @package
 * @version 1.0.0
 */

 /**
  * @constant array
  * List of available games
  */
 const availableGames = [
     'Bataille',
     'Belote',
     'Tarot',
];

/**
 * @var number
 * Number of players
 */
let playerNumber = readLine.questionInt('Combien de personnes veulent jouer avec moi?');
while (playerNumber <2 || playerNumber >5) {
    console.log('Sorry guys, we need to be no more than 5 and not myself alone')
    playerNumber = readLine.questionInt('Combien de personnes veulent jouer avec moi?');
}

/**
 * @var string
 * Message to display at the end
 */

let message = '';

//Check the number of player against possibilities
if (playerNumber <= 3) {
    message = message + 'Vous pouvez jouer à ' + availableGames[0];
} else { if (playerNumber <= 4) {
    message = message + 'Vous pouvez jouer à ' + availableGames[0] + ' et ' + availableGames [1];}
    else { 
        message = message + 'Il ne reste plus qu\'à jouer à ' + availableGames [2]}
    }
console.log(message) ;


