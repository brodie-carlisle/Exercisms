export class QueenAttack {
  constructor(position = {}) {
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
  createBoard() {
    //creates an array with 8 nested arrays. Each array has 8 elements, filled them with '_'
    return Array(8)
      .fill()
      .map(() => Array(8).fill("_"));
  }
  setQueens() {
    //places queens on 'board'
    const [x1, y1] = this.white;
    const [x2, y2] = this.black;

    this.board[x1][y1] = "W";
    this.board[x2][y2] = "B";
  }
  toString() {
    this.setQueens();
    let boardStr = "";

    for (let i = 0; i < this.board.length; i++) {
      // loop through arrays and transforms from an array of 8 nested arrays, to a string with 8 lines.
      boardStr += this.board[i].join(" ") + "\n";
    }
    return boardStr;
  }
  canAttack() {
    let attack = false
    if (this.white[0] === this.black[0] || this.white[1] === this.black[1]) {//checks rows and columns
      return attack = true;
    } else if (//checks diagonals 
      this.white[0] - this.white[1] === this.black[0] - this.black[1] ||
      this.white[0] + this.white[1] === this.black[0] + this.black[1]
    ) {
      return attack = true;
    } else {
      return attack = false;
    }
  }
}

