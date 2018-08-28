'use strict';

export default class AnimalShelter{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.numOfCats = 0;
    this.numOfDogs = 0;
  }
}

class Animal{
  constructor(species){
    this.animal = species;
    this.id = null;
    this.next = null;
    this.previous = null;
  }
}