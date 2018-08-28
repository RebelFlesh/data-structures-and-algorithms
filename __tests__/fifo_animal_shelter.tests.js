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
        name:'lassy',
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
});