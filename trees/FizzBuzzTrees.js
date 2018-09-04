'use strict';

function fizzBuzzTree(tree){
  let check = function(node){
    if(node.value % 3 === 0){
      node.value ="Fizz";
    }
    if(node.right){
      check(node.right);
    }
    if(node.left){
      check(node.left);
    }
  }
  check(tree.root);
}

export default fizzBuzzTree;
