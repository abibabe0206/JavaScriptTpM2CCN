const Player = require('./player');

// Question 16
class PayToWinPlayer extends Player {
    constructor(name, attack, defense) {
        super(name, attack, defense);
        this.attack = attack * 1.4;  // question 17
    }

    fight(one){
        super.fight(one);
    }

    displayMyPlayerInfo(){ 
        super.displayMyPlayerInfo();
        console.log("My super name is " + this.name + ", and i am here to win this fight");
    }
}

module.exports = { PayToWinPlayer }