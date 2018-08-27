'use strict';

import Queue from '../../stacks-and-queues/queue_with_stacks';

describe('Queue', () => {
  describe('enqueue', () => {
    it('throws an error when no value is given', () => {
      let queue = new Queue();
      expect(() => queue.enqueue()).toThrowError('Calling enqueue without a value');
    });
    it('can add an item to an empty queue', () => {
      let queue = new Queue();

      queue.enqueue(4);

      expect(queue.data.head).not.toBe(null);
      expect(queue.data.head.value).toBe(4);
      expect(queue.data.length).toBe(1);
    });
    it('can add new nodes to an end of an existing', () => {
      let queue = new Queue();

      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.data.head.value).toBe(2);
      expect(queue.data.head.next.value).toBe(1);
      expect(queue.data.length).toBe(2);
    });
  });
  describe('dequeue', () => {
    it('throws an error if called on an empty queue', () => {
      let queue = new Queue();
      expect(() => queue.dequeue()).toThrowError('Calling dequeue on empty queue');
    });
    it('returns the value at the front of the queue', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      let returnedValue = queue.dequeue();
      expect(returnedValue).toBe(1);
    });
    it('leaves the original queue shifted over by one with the returned value missing', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      queue.dequeue();
      expect(queue.data.head.value).toBe(3);
    });
  });
});