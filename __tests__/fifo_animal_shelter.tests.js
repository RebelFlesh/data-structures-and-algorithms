'use strict';

import AnimalShelter from '../fifo_animal_shelter';

describe('AnimalShelter', () => {
  describe('enqueue', () =>{
    it('returns undefined if no animal was given', () => {
      let shelterQueue = new AnimalShelter();
      expect(shelterQueue.enqueue()).toBe(undefined);
    });
    it('can add an animal to an empty shelter', () => {
      let shelterQueue = new AnimalShelter();
      let dog = {
        species:'dog',
        name:'Fido',
      }
      shelterQueue.enqueue(dog);

      expect(shelterQueue.head).not.toBe(null);
      expect(shelterQueue.tail).not.toBe(null);
      expect(shelterQueue.head.animal.species).toBe('dog');
      expect(shelterQueue.length).toBe(1);
      expect(shelterQueue.numOfDogs).toBe(1);
      expect(shelterQueue.numOfCats).toBe(0);
    });
    it('can add an amimal to an existing shelter', () => {
      let shelterQueue = new AnimalShelter();
      let dog1 = {
        species:'dog',
        name:'Fido',
      }
      let dog2 = {
        species:'dog',
        name:'Lassy',
      }
      shelterQueue.enqueue(dog1);
      shelterQueue.enqueue(dog2);

      expect(shelterQueue.head.animal.species).toBe('dog');
      expect(shelterQueue.head.next).not.toBe(null);
      expect(shelterQueue.head.next.animal.species).toBe('dog');
      expect(shelterQueue.tail.previous).not.toBe(null);
      expect(shelterQueue.length).toBe(2);
      expect(shelterQueue.numOfDogs).toBe(2);
      expect(shelterQueue.numOfCats).toBe(0);

      let cat = {
        species:'cat',
        name:'Garfield',
      }
      shelterQueue.enqueue(cat);

      expect(shelterQueue.tail.animal.species).toBe('cat');
      expect(shelterQueue.numOfCats).toBe(1);
    });
  });
  describe('dequeue', () => {
    it('returns the animal first added to the shelter if no preference was given', () => {
      let shelterQueue = new AnimalShelter();
      let dog = {
        species:'dog',
        name:'Fido',
      }
      let cat ={
        species:'cat',
        name:'Frasier'
      }
      shelterQueue.enqueue(dog);
      shelterQueue.enqueue(cat);
      expect(shelterQueue.head.animal.species).toBe('dog');
      expect(shelterQueue.numOfDogs).toBe(1);
      expect(shelterQueue.length).toBe(2);

      let newPet = shelterQueue.dequeue();
      expect(newPet.name).toBe('Fido');
      expect(shelterQueue.head.animal.species).toBe('cat');
      expect(shelterQueue.numOfDogs).toBe(0);
      expect(shelterQueue.length).toBe(1);
    });
    it('returns the first animal recieve of a given preference', () => {
      let shelterQueue = new AnimalShelter();
      let dog = {
        species:'dog',
        name:'Fido',
      }
      let cat ={
        species:'cat',
        name:'Frasier'
      } 
      let dog2 ={
        species:'dog',
        name:'Bingo',
      }
      shelterQueue.enqueue(dog);
      shelterQueue.enqueue(cat);
      shelterQueue.enqueue(dog2);
      expect(shelterQueue.head.animal.name).toBe('Fido');
      expect(shelterQueue.head.next.animal.name).toBe('Frasier');
      expect(shelterQueue.head.next.next.animal.name).toBe('Bingo');

      let newPet = shelterQueue.dequeue('cat');
      expect(newPet.species).toBe('cat');
      expect(newPet.name).toBe('Frasier');
      expect(shelterQueue.head.animal.name).toBe('Fido');
      expect(shelterQueue.head.next.animal.name).toBe('Bingo');
      expect(shelterQueue.numOfCats).toBe(0);
    });
  });
});