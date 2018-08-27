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
    else{
      let storedNodes = this.head;
      this.head = node;
      this.head.next = storedNodes;
    }
    this.length++;
  }

  pop(){
    if(!this.head){
      throw new Error('Stack is empty');
    }
    let poppedValue = this.head.value;
    this.head = this.head.next;
    this.length--;
    return poppedValue;
  }
}

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

module.exports = Stack;