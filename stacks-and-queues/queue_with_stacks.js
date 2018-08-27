'use strict';

import Stack from './stacks';

export default class FakeQueue{
  constructor(){
    this.data = new Stack();
  }

  enqueue(value){
    this.data.push(value);
  }
}