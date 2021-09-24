import { NotImplementedError } from "../extensions/index.js"

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const min = Math.min(...n.toString().split(""))
  const strr = n.toString()
  console.log(strr.split(0, strr.indexOf(min)))
  let res =
    strr.indexOf(min) !== strr.length - 1
      ? strr.slice(0, strr.indexOf(min)) + strr.slice(strr.indexOf(min) + 1)
      : strr.slice(0, strr.indexOf(min))

  return Number(res)
}
