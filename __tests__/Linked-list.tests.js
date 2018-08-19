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
  
});