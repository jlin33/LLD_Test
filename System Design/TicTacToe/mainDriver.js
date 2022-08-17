// driving code for tic tac toe

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const {Game, Player} = require("./components");

const game1 = new Game(3);
const player1 = new Player(1,"X");
const player2 = new Player(2,"O");

// game loop
// player inputs answer as rowNum,ColumnNum
let currPlayer = [player1,player2];
let i = 0;
(async () => {
    while (game1.game) {

        const ans = await new Promise((resolve) => {
            rl.question(`Go Player ${currPlayer[i].ID}: `, resolve)
        })
        const [row,col] = ans.split(",");
        game1.doTurn(parseInt(row),parseInt(col),currPlayer[i]);
        i = i === 0 ? 1 : 0;
    }
    rl.close();
})();
// game1.doTurn(0,0,player1);
// game1.doTurn(0,1,player2);
// game1.doTurn(1,1,player1);
// game1.doTurn(2,1,player2);
// game1.doTurn(2,2,player1);
// console.log(game1.game)