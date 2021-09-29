import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let shortArr = arr.filter((ar) => ar !== -1);
  shortArr.sort((a, b) => a - b);
  if (arr.length === shortArr.length) return shortArr;
  let count = 0;
  return arr.reduce((acc, el, index) => {
    if (el === -1) {
      count++;
      return acc;
    }
    if (el !== -1) {
      acc[index] = shortArr[index - count];
      return acc;
    }
  }, arr);
}
