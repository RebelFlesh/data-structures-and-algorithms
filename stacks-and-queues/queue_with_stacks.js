'use strict';

import Stack from './stacks';

export default class FakeQueue{
  constructor(){
    this.data = new Stack();
  }

  enqueue(value){
    if(!value){
      throw new Error('Calling enqueue without a value');
    }
    this.data.push(value);
  }

  dequeue(){
    if(!this.data.head){
      throw new Error('Calling dequeue on empty queue')
    }
    let returnValue;
    let storageStack = new Stack();
    let current = this.data.head;
    while(current !== null){
      if(current.next !== null){
        storageStack.push(this.data.pop());
      }
      else{
        returnValue = this.data.pop();
      }
      current = current.next;
    }
    current = storageStack.head;
    while(current !== null){
      this.data.push(storageStack.pop());
      current = current.next;
    }
    return returnValue;
  }
}