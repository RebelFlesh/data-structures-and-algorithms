'use strict';

class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value){
    if(!value){
      throw new Error('Enqueue needs a value');
    }

    let node = new Node(value);

    if(!this.head){
      this.head = node;
      this.tail = node;
    }
    else{
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  dequeue(){
    if(!this.head){
      throw new Error('Queue is empty');
    }
    let returnedValue = this.head.value;
    this.head = this.head.next;
    this.head.previous = null;
    this.length--;
    return returnedValue;
  }
}

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

module.exports = Queue;