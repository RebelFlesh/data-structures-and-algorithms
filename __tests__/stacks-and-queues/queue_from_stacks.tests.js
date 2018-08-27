'use strict';

import FakeQueue from '../../stacks-and-queues/queue_with_stacks';

describe('Queue', () => {
  describe('enqueue', () => {
    it('can add an item to the queue', () => {
      let queue = new FakeQueue;

      queue.enqueue(4);

      expect(queue.data.head).not.toBe(null);
      expect(queue.data.head.value).toBe(4);
      expect(queue.data.length).toBe(1);
    });
  });
});