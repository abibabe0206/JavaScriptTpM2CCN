// 7
const getMyPlayerRatio = require('./playerUtils');
const utils = require('./playerUtils');

/**
 * Lexical Scope
 */
// 1
/**let title = "Lexical Scope: ";
let name = "Val";
let attack = 30;
let defense = 10;
let hp = 100;*/

/**
 * Scope Closure
 */

 // 3
function playerGenerator(title, name, attack, defense){
    let hp = 100;

    function displayMyPlayerInfo(){
        console.log(title + "My name is "+ name + ", i have " + attack + " attack, " + defense + " defense and " + hp + " health points.");
    }
    var player = {
        ["title"]: title,
        ["name"]: name,
        ["attack"]: attack,
        ["defense"]: defense,
        ["hp"]: hp,
        ["displayMyPlayerInfo"]: displayMyPlayerInfo,
        ["fight"]: utils.fight // question 10
    }
    return player;
}




module.exports = { playerGenerator };
//exports.playerGenerator=playerGenerator;