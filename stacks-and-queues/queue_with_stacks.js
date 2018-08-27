'use strict';

import Stack from './stacks';

export default class FakeQueue{
  constructor(){
    this.data = new Stack();
  }

  enqueue(value){
    if(!value){
      throw new Error('enqueue needs a value');
    }
    this.data.push(value);
  }
}