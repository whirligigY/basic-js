import { NotImplementedError } from "../extensions/index.js"

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let sum = 1
  let str1 = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      sum = sum + 1
    } else {
      str1 = str1 + (sum > 1 ? sum : "") + str[i]
      sum = 1
    }
  }
  return str1
}
