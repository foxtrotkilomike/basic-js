const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let zerosTemplate = Array.from(matrix[0], element => 0)
  return matrix.reduce((prev, curr) => {
    return prev + curr.reduce((prev, curr, currIdx) => {
      if (curr === 0) {
        zerosTemplate[currIdx] = 1;
      }
      return zerosTemplate[currIdx] !== 1 ? prev + curr : prev}, 0)
  }, 0)            
}

module.exports = {
  getMatrixElementsSum
};
