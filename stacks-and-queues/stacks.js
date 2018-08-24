'use strict';

class Stack{
  constructor(){
    this.head = null;
    this.length = 0;
  }

  push(value){
    if(!value){
      throw new Error('Push needs a value');
    }
  }
}

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

module.exports = Stack;