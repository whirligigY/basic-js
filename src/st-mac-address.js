import { NotImplementedError } from "../extensions/index.js";

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  if (n && n.includes("-")) {
    if (n.split("-").length === 6) {
      return n
        .split("-")
        .every(
          (item) =>
            item.split("").filter((el) => el.search(/[A-F0-9]/) >= 0).length ===
            2
        )
        ? true
        : false;
    }
  }
  return false;
}
