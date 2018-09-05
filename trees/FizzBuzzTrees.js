'use strict';

function fizzBuzzTree(tree){
  let check = function(node){
    if(node.value !== 0){
      if(node.value % 3 === 0 && node.value % 5 === 0){
        node.value ="FizzBuzz";
      }
      else if(node.value % 3 === 0){
        node.value ="Fizz";
      }
      else if(node.value % 5 === 0){
        node.value ="Buzz";
      }
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
