import { NotImplementedError } from "../extensions/index.js"

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  return s1.split("").reduce((acc, el) => {
    if (s2.includes(el)) {
      s2 = s2.slice(0, s2.indexOf(el)) + s2.slice(s2.indexOf(el) + 1)
      return acc + 1
    }
    if (!s2.includes(el)) return acc
  }, 0)
}
