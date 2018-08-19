'use strict';

class List {
  constructor(){
    this.head = null;
    this.length = 0;
  }

  insert(value){
    if(this.head === null){
      this.head = new Node(value);
    }
    else{
      let newNode = new Node(value);
      newNode.pointer = this.head;
      this.head = newNode;
  }
  }

  }

class Node {
  constructor(value){
    this.v = value;
    this.pointer = null;
  }
}

module.exports = List;
