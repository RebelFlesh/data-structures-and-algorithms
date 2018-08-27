'use strict';


export default class fakeQueue{
  constructor(){
    this.head = null;
    this.length = 0;
  }
}

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}