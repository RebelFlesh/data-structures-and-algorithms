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

    let node = new Node(value);

    if(!this.head){
      this.head = node;
    }
    this.length++;
  }
}

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

module.exports = Stack;