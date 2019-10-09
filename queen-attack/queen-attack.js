export class QueenAttack {
  constructor(position = {}) {
    //constructor accepts an obj param
    this.white = position.white || [0, 3]; //accepts params or sets default position
    this.black = position.black || [7, 3];
    this.board = this.createBoard();
    this.sameSpace();
    this.canAttack();
  }

  sameSpace() {
    //checks if queens occupy same square on board
    if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) {
      throw new Error("Queens cannot share the same space");
    }
  }
  toString() {
    //toString() method is called in 2 tests
    this.setQueens();
    let boardStr = "";

    for (let i = 0; i < this.board.length; i++) {
      // loop through arrays and transforms from an array of 8 nested arrays, to an array with 8 strings (lines).
      boardStr += this.board[i].join(" ") + "\n";
    }
    return boardStr;
  }
  setQueens() {
    //calls createBoard() via this.board then places queens on 'board'
    const [x1, y1] = this.white; //assigns values to x & y by calling constructor
    const [x2, y2] = this.black;

    this.board[x1][y1] = "W"; //uses assigned values to place pieces on board
    this.board[x2][y2] = "B";
  }
  createBoard() {
    //creates an array with 8 nested arrays. Each array has 8 elements, filled them with '_'
    return Array(8)
      .fill()
      .map(() => Array(8).fill("_"));
  }

  canAttack() {
    let attack = false;
    if (this.white[0] === this.black[0] || this.white[1] === this.black[1]) {
      //checks rows and columns, if the x axis (index[0]) or y axis (index[1]) are the same they share a row or column
      return (attack = true);
    } else if (
      //checks diagonals. If diagonally alligned, the sum or difference in cooridnates will be the same
      this.white[0] - this.white[1] === this.black[0] - this.black[1] ||
      this.white[0] + this.white[1] === this.black[0] + this.black[1]
    ) {
      return (attack = true);
    } else {
      return (attack = false);
    }
  }
}
