'use strict';

const Queue = require('../../stacks-and-queues/queues');

describe('queue', () => {
  describe('constructor', () => {
    it('has a length of zero when initalized', () => {
      let queue = new Queue();
  
      expect(queue.length).toBe(0);
      expect(queue.head).toBe(null);
      expect(queue.tail).toBe(null);
    });
  });
  describe('enqueue', () => {
    it('adds a new node to the end of a queue', () => {
      let queue = new Queue();

      queue.enqueue(1);
      expect(queue.head).not.toBe(null);
      expect(queue.tail).not.toBe(null);
      expect(queue.head.value).toBe(1);
      expect(queue.length).toBe(1);
    });
  });
});