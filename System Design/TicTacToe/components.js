// Rules:
// Tic Tac Toe on a nxn board with two players
// n has to be atleast 3
// Players take turns to place/draw pieces on the board
// When a player wins, print message "Player X wins! and terminate game

// Classes
class Game {
    constructor (n=3) {
        console.log("Game started!")
        this.game = new Board(n)
    }
    doTurn(row,col,player) {
        const result = this.game.setMove(row,col,player);
        if (result) {
            console.log(`Player ${result} wins!`)
            this.#endGame()
        }
    }
    #endGame() {
        this.game = null
    }
}

class Board {
    constructor (size) {
        //create a size x size board
        this.size = size
        this.board = new Array(size);
        for (let i =0;i<size;i++) {
            this.board[i] = new Array(size);
        }
    }

    // makes a change to the board for a particular move (if valid)
    // returns playerID if the move is a win and false otherwise
    setMove(row,col,player) {
        if (this.#isValid(row,col)) {
            this.board[row][col] = player.marker;
            if (this.#hasWon(row,col,player.marker)) return player.ID
        }
        return false
    }

    #isValid (r,c) {
        // returns true if row and col is
        // a. within board bounds
        // b. on an empty spot
        return (r >=0 && r < this.size && c >=0 && c < this.size && !this.board[r][c])
    }
    #hasWon (r,c,marker) {
        // returns true if state of board is in a "won" state
        // after a marker has been set at index [r,c]
        // just have to check:
        // if row r is filled with same elem
        // or if col c is filled with same elem
        // of if [r,c] is on diagonal, check if diagonals are filled
        let won = true;

        // check row
        for (let i =0;i<this.size;i++) {
            if (this.board[r][i] !== marker) {
                won = false;
                break;
            }
        }
        if (won) return true;

        // check column
        won = true;
        for (let i =0;i<this.size;i++) {
            if (this.board[i][c] !== marker) {
                won = false;
                break;
            }
        }
        if (won) return true;
        // check diagonals if necessary
        if (r === c ) {
            won = true;
            for (let i =0;i<this.size;i++) {
                if (this.board[i][i] !== marker) {
                    won = false;
                    break;
                }
            }
            if (won) return true;
        }
        if ( r + c === this.size-1) {
            won = true;
            for (let i =0;i<this.size;i++) {
                if (this.board[i][this.size-1-i] !== marker) {
                    won = false;
                    break;
                }
            }
            if (won) return true;
        }
    }
}

class Player {
    constructor(ID,marker) {
        this.ID = ID;
        this.marker = marker;
    }
}

module.exports = {
    Game,
    Player
}