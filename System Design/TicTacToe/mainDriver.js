// driving code for tic tac toe

const {Game, Player} = require("./components");

const game1 = new Game(3);
const player1 = new Player(1,"X");
const player2 = new Player(2,"O");
game1.doTurn(0,0,player1);
game1.doTurn(0,1,player2);
game1.doTurn(1,1,player1);
game1.doTurn(2,1,player2);
game1.doTurn(2,2,player1);
console.log(game1.game)