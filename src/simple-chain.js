import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  arrayValues: [],
  getLength() {
    return this.arrayValues.length;
  },
  addLink(valueLink) {
    const valLink = String(valueLink);
    this.arrayValues.push(valLink);
    return this;
  },
  removeLink(position) {
    if (
      this.arrayValues.length > position &&
      position &&
      !isNaN(position) &&
      position > 0
    ) {
      this.arrayValues.splice(position - 1, 1);
      return this;
    }
    this.arrayValues = [];
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.arrayValues.reverse();
    return this;
  },
  finishChain() {
    const result = `( ${this.arrayValues.join(" )~~( ")} )`;
    this.arrayValues = [];
    return result;
  },
};
