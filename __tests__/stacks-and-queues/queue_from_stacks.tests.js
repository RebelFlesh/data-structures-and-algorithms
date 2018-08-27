'use strict';

import FakeQueue from '../../stacks-and-queues/queue_with_stacks';

describe('Queue', () => {
  describe('enqueue', () => {
    it('throws an error when no value is given', () => {
      let queue = new FakeQueue();
      expect(() => queue.enqueue()).toThrowError('enqueue needs a value');
    });
    it('can add an item to an empty queue', () => {
      let queue = new FakeQueue();

      queue.enqueue(4);

      expect(queue.data.head).not.toBe(null);
      expect(queue.data.head.value).toBe(4);
      expect(queue.data.length).toBe(1);
    });
    it('can add new nodes to an end of an existing', () => {
      let queue = new FakeQueue();

      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.data.head.value).toBe(2);
      expect(queue.data.head.next.value).toBe(1);
      expect(queue.data.length).toBe(2);
    });
  });
});