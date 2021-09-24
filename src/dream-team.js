import { NotImplementedError } from "../extensions/index.js"

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!members || !members.map) return false
  return members
    .map((el) => {
      return isNaN(Number(el)) && typeof el === "string"
        ? el
            .toUpperCase()
            .split("")
            .filter((item) => item !== " ")
            .join("")[0]
        : ""
    })
    .sort()
    .join("")
}
