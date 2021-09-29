import { NotImplementedError } from "../extensions/index.js";

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
export default function getMatrixElementsSum(matrix) {
  let indexArray = [];
  return matrix.reduce((acc, item, index) => {
    if (Array.isArray(item)) {
      indexArray.length > 0 &&
        indexArray.forEach((element) => {
          item = item.map((elem, index) => (index === element ? 0 : elem));
        });
      return (
        acc +
        item.reduce((ac, el, indexEl) => {
          if (el === 0) {
            indexArray.push(indexEl);
            return ac;
          }
          if (el !== 0) return ac + el;
        }, 0)
      );
    }
  }, 0);
}
