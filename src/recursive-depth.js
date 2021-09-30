import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    if (arr.length === 0) return 1;
    if (arr.length > 0) {
      return (
        1 +
        arr.reduce((acc, item) => {
          return Array.isArray(item)
            ? Math.max(acc, this.calculateDepth(item))
            : acc;
        }, 0)
      );
    }
  }
}
