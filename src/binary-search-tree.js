const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.arr = [];
  }
  root() {
    return (this.arr.length == 0)? null : {data:this.arr[0]};
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    this.arr.push(data);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    return this.arr.indexOf(data) >= 0;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    return (this.arr.indexOf(data) >= 0) ? {data:data} : null;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    let tmp = [];

    for(let val of this.arr){
      if (val !== data) tmp.push(val);
    } 
    this.arr = tmp;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let minval = null;
    for (let val of this.arr) {minval = (minval == null) ? val : Math.min(minval, val)}
    return minval;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    let maxval = null;
    for (let val of this.arr) {maxval = (maxval == null) ? val : Math.max(maxval, val)}
    return maxval;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};