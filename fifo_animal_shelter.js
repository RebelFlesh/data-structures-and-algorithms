'use strict';

export default class AnimalShelter{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.numOfCats = 0;
    this.numOfDogs = 0;
  }

  enqueue(animal){
    //if no species were given, dont add an "undefined animal"
    if(!animal){
      return undefined;
    }
    
    //Creates new animal
    let newAnimal = new Animal(animal);

    //If shelter is empty, start a list
    if(!this.head){
      this.head = newAnimal;
      this.tail = newAnimal;
    }

    //Else add animal to the end
    this.tail.next = newAnimal;
    newAnimal.previous =this.tail;
    this.tail = newAnimal;
     //Changes num of dogs or cats
     this.length++;
    if(newAnimal.animal.species === 'dog'){
      this.numOfDogs++;
    }
    if(newAnimal.animal.species === 'cat'){
      this.numOfCats++;
    }
  }
}

class Animal{
  constructor(animalObject){
    this.animal = animalObject;
    this.next = null;
    this.previous = null;
  }
}