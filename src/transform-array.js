import { NotImplementedError } from "../extensions/index.js"

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!")
  if (arr && arr.map) {
    let updatedArr = [...arr].flat(4).reduce(
      (acc, ar, index) => {
        if (ar === "--double-next") {
          acc[index + 1] && acc[index + 1] !== null
            ? acc.splice(index, 1, acc[index + 1])
            : acc.splice(index, 1)
        }
        if (ar === "--double-prev") {
          acc[index - 1] && acc[index + 1] !== null
            ? acc.splice(index, 1, acc[index - 1])
            : acc.splice(index, 1)
        }
        if (ar === "--discard-prev") {
          acc[index - 1] && acc[index + 1] !== null
            ? acc.splice(index - 1, 2, null, null)
            : acc.splice(index, 1)
        }
        if (ar === "--discard-next") {
          acc[index + 1] && acc[index + 1] !== null
            ? acc.splice(index, 2, null, null)
            : acc.splice(index, 1)
        }
        return acc
      },
      [...arr]
    )
    return updatedArr.filter((el) => el)
  }
}
