const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.push(value !== null ? value : null)
    return this
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof position !== 'number' || position <= 0 || position - 1 >= this.chain.length ) {
      this.chain = []
      throw new Error ('You can\'t remove incorrect link!')
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse()
    return this
  },
  finishChain() {
    let finalChain = ''
      for (let i = 0; i < this.chain.length; i++) {
        if (i === 0) {
          finalChain += `( ${this.chain[i]} )`
        } else {
          finalChain += `~~( ${this.chain[i]} )`
        }
      }
    



    // let finalChain = this.chain
    this.chain = []

    return finalChain
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
