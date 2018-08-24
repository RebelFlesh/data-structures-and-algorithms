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
});