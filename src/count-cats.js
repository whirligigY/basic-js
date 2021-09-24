import { NotImplementedError } from "../extensions/index.js"

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let arr = [...matrix]
  return (
    arr &&
    arr.reduce(
      (ac, el) =>
        ac + el.reduce((acc, item) => (item === "^^" ? acc + 1 : acc), 0),
      0
    )
  )
}
