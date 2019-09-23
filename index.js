
const playerGenerator = require('./playerGenerator.js');
const player = require('./player');
const fight = require('./playerUtils');
const getMyPlayerRatio = require('./playerUtils');



playerGenerator.playerGenerator("Scope Closure: ","toto", 20, 5);

// 4
/*player1 = playerGenerator.playerGenerator("Scope Closure: ","player1", 20, 5);
player2 = playerGenerator.playerGenerator("Scope Closure: ","player2", 20, 5);
*/

// 5 
/*player1.displayMyPlayerInfo();
player2.displayMyPlayerInfo();*/

// 6
//console.log(getMyPlayerRatio.getMyPlayerRatio(player1,9));


// let war = fight.fight(player1, player2);

//let war= player1.fight(player2);

//name (string), attack (number, [10-30]), defense (number, [1-10]), hp (number, 100).
// Question 15
let  player1 = new player.Player("Valantine", 20, 4);
let  player2 = new player.Player("Joy", 10, 6);

// Question 18
let  player3 = new player.PayToWinPlayer("Abiola", 30, 7);


player1.displayMyPlayerInfo();
player3.displayMyPlayerInfo();
//player1.fight(player2);
player1.fight(player3);


//module.exports = { displayMyPlayerInfo }