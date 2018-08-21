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
    this.length++;
  }

  includes(valueQueried){
    function checkNext(currentNode){
      if(currentNode.v === valueQueried){
        return true;
      }
      else if(currentNode.pointer === null){
        return false;
      }
      else{
        currentNode = currentNode.pointer;
        return checkNext(currentNode);
      }
    }
    
    let currentNode = this.head;
    return checkNext(currentNode);
  }

  append(value){
    function checkNext(currentNode){
      if(currentNode.pointer === null){
        currentNode.pointer = new Node(value);
      }  
      else{
        currentNode = currentNode.pointer;
        checkNext(currentNode);
      }
    }

    if(!this.head){
      this.head = new Node(value);
      this.length++;
    }
    else{
      let currentNode = this.head;
      checkNext(currentNode);
      this.length++;
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
