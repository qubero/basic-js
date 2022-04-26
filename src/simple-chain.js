const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));

    return this;
  },
  removeLink(position) {
    if (!this.chain[position - 1]) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }

    this.chain = [
      ...this.chain.slice(0, position - 1),
      ...this.chain.slice(position, this.chain.length)
    ];

    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();

    return this;
  },
  finishChain() {
    const chain = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];

    return chain;
  }
};

module.exports = {
  chainMaker
};
