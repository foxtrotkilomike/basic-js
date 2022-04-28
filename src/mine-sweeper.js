const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let field = Array.from(matrix, elem => Array.from(elem, el => 0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        for (let i1 = i - 1; i1 <= i + 1; i1++) {
          for (let j1 = j - 1; j1 <= j + 1; j1++) {
            if (field[i1] !== undefined && field[i1][j1] !== undefined && (i1 !== i || j1 !== j))
              field[i1][j1]++;
          }
        }
      }
    }
  }
  
  return field
}

module.exports = {
  minesweeper
};
