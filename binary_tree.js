'use strict';

export default class BinaryTree{
  constructor(){
    this.root = null;
  }

  insert(value){
    let traverse = function(current){
      console.log("compairing"+ current.value + "to"+ node.value);
      if(current.value > node.value){
        if(current.left === null){
          node.parent = current;
          current.left = node;
        }
        else{
          current = current.left;
          traverse(current);
        }
      }
      else if(current.value < node.value){
        if(current.right === null){
          node.parent = current;
          current.right = node;
        }
        else{
          current = current.right;
          traverse(current);
        }
      }
      else if(current.value === node.value){
        throw new Error('This node exists in the tree already');
      }
    }

    let node = new Node(value);

    if(!this.root){
      this.root = node;
      return;
    }

    let current = this.root;
    traverse(current);
  }
}

class Node{
  constructor(value){
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}