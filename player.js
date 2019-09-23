/*prototype
const utils = require('./playerUtils');
function Player(name, attack, defense) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = 100;
}
//Add prototype
Player.prototype.fight = utils.fight;
Player.prototype.displayMyPlayerInfo = function(){
    console.log("My name is " + this.name + ", I have " + this.attack + " attack, " + this.defense + " defense and " + this.hp + " health points.");            
};
function PayToWinPlayer(name, attack, defense) {
        this.name = name;
        this.attack = attack * 1.4;
        this.defense = defense;
        this.hp = 100;
}
PayToWinPlayer.prototype = Object.create(Player.prototype);
module.exports = { Player, PayToWinPlayer }
*/

const utils = require('./playerUtils');
const playerGenerator = require('./playerGenerator');

// question 13
class Player {
    constructor(name, attack, defense){
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = 100;
    }

    // question 14
    displayMyPlayerInfo(){
        console.log("My name is " + this.name + ", I have " + this.attack + " attack, " + this.defense + " defense and " + this.hp + " health points.");            
    }
    
    fight(Player){
        utils.fight.call(this, Player);
    }
    
    
}

// question 17
class PayToWinPlayer extends Player {
    constructor(name, attack, defense) { 
        super(name, attack, defense);
        this.attack = attack * 1.4;  
    }

    fight(one){
        super.fight(one);
    }

    displayMyPlayerInfo(){
        super.displayMyPlayerInfo();
        console.log("My super strong name is " + this.name + ", and i am here to win this fight");
    }
}

module.exports = { Player, PayToWinPlayer }