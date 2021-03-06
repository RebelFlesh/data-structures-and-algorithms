'use strict';

const List = require('../linked-list');

describe('list',()=>{
  describe('constructor',()=>{
    it('creates an empty linked list that has a head with an undefiend value ',()=>{
      var list = new List();
  
      expect(list.head).toBe(null);
      expect(list.length).toBe(0);
    });
  })
  

  describe('insert',()=>{
    it('can add a node to an empty  list',()=>{
      var list = new List();
      list.insert(1);

      expect(list.length).toBe(1);
      expect(list.head).not.toBe(null);
      expect(list.head.v).toBe(1);
      expect(list.head.pointer).toBe(null);

      
    });
    it('can add nodes to a populated list',()=>{
      let list = new List();
      list.insert(1);
      list.insert(4);

      expect(list.length).toBe(2);
      expect(list.head.v).toBe(4);
      expect(list.head.pointer.v).toBe(1);

      list.insert(99);

      expect(list.length).toBe(3);
      expect(list.head.v).toBe(99);
      expect(list.head.pointer.v).toBe(4);
      expect(list.head.pointer.pointer.v).toBe(1);
    });
  });

  describe('includes',()=>{
    it('can check if values are in the list',()=>{
      let list = new List();
      list.insert(1);
      list.insert(4);
      list.insert(99);

      expect(list.includes(4)).toBe(true);
      expect(list.includes(9001)).toBe(false);
    });
  })

  describe('append',() => {
    it('adds a node if the list is empty',() =>{
      let list = new List();
      list.append(1);

      expect(list.includes(1)).toBe(true);
      expect(list.length).toBe(1);
    });

    it('can add node to the end of the list',() =>{
      let list = new List();
      list.insert('red fish');
      list.append('blue fish');

      expect(list.includes('red fish')).toBe(true);
      expect(list.includes('blue fish')).toBe(true);
      expect(list.length).toBe(2);
    });
  });

  describe('insertBefore',() =>{
    it('blows up if called on an empty list',() => {
      let list = new List();

      //TODO:Make this throw error
      expect(list.insertBefore(4,3)).toBe(null);
    });
    it('inserts a node before a given node',() =>{
      let list = new List();
      list.append(1);
      list.append(2);
      list.append(4);

      list.insertBefore(4,3);

      expect(list.includes(3)).toBe(true);
      expect(list.head.pointer.v).toBe(2);
      expect(list.head.pointer.pointer.v).toBe(3);
      expect(list.head.pointer.pointer.pointer.v).toBe(4);
    });
  });
});