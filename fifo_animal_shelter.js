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
  dequeue(preference){
    if(!preference){
      const returnedAnimal = this.head.animal;
      this.head = this.head.next;
      this.head.next = null;
      if(returnedAnimal.species ==='dog'){
        this.numOfDogs--;
      }
      if(returnedAnimal.species ==='cat'){
        this.numOfCats--;
      }
      this.length--;
      return returnedAnimal;
    }
    let currentAnimal = this.head;
    
    while(currentAnimal.animal.species !== preference){
      console.log(currentAnimal.animal.name);
      currentAnimal = this.head.next;
    }
    let returnedAnimal = currentAnimal.animal;
    console.log(returnedAnimal);
    currentAnimal.previous.next = currentAnimal.next;
    if(returnedAnimal.species ==='dog'){
      this.numOfDogs--;
    }
    if(returnedAnimal.species ==='cat'){
      this.numOfCats--;
    }
    this.length--;
    return returnedAnimal;
  }
}

class Animal{
  constructor(animalObject){
    this.animal = animalObject;
    this.next = null;
    this.previous = null;
  }
}