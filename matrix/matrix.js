export class Matrix {
  constructor(input) {
    //creates an array, splits by new line (\n), then splits by "", then converts from str to num
    this.matrix = input.split("\n").map(row => row.split(" ").map(Number));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrix[0].map((val, i) => //1st map determines index (like a while loop)
    this.matrix.map(row => row[i])); //'nested' map pulls out the value at current index (determined by 1st map), of whichever row is being looped
  }
}

// let matrix = new Matrix('1 2 3\n4 5 6\n7 8 9')
// console.log(matrix.columns)
