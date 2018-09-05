'use strict';

export default class BinaryTree{
  constructor(){
    this.root = null;
  }

  insert(value){
    let traverse = function(current){
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

  remove(queriedValue){
    let traverse = function(current){
      if(current.value > queriedValue){
        current = current.left;
        traverse(current);
      }
      else if(current.value < queriedValue){
        current = current.right;
        traverse(current);
      }
      else if(current.value === queriedValue){
        if(current === current.parent.right){
          current.parent.right = null;
        }
        else{
          current.parent.left = null;
        }
      }
      else{
        throw new Error("Queried Value isnt in the tree");
      }
    }
    let current = this.root;
    traverse(current)
  }

  find_maximum_value(){
    if(!this.root){
      return null;
    }
    let current = this.root;
    while(current.right !== null){
      current = current.right;
    }
    return current.value;
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