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
    it("throws an error if not given argument",()=> {
      let queue = new Queue();
      expect(()=> queue.enqueue()).toThrowError('Enqueue needs a value');
    });
    
    it('adds a new node to an empty queue', () => {
      let queue = new Queue();

      queue.enqueue(1);
      expect(queue.head).not.toBe(null);
      expect(queue.tail).not.toBe(null);
      expect(queue.head.value).toBe(1);
      expect(queue.length).toBe(1);
    });

    it('can add new nodes to an end of a queue', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);

      //testing from the front of queue
      expect(queue.head.value).toBe(1);
      expect(queue.head.next.value).toBe(2);
      //testing from the back of queue
      expect(queue.tail.value).toBe(2);
      expect(queue.tail.previous.value).toBe(1);
      //testing length of queue
      expect(queue.length).toBe(2);

      queue.enqueue(3);

      //testing front
      expect(queue.head.value).toBe(1);
      expect(queue.head.next.value).toBe(2);
      expect(queue.head.next.next.value).toBe(3);
      //testing back
      expect(queue.tail.value).toBe(3);
      expect(queue.tail.previous.value).toBe(2);
      expect(queue.tail.previous.previous.value).toBe(1);
      //testing length
      expect(queue.length).toBe(3);
    });
  });
  describe('dequeue', () => {
    it('throws an error', () => {
      let queue = new Queue();
      expect(()=>queue.dequeue()).toThrowError('Queue is empty');
    });
    it('removes front item from the queue', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      //Before dequeue
      expect(queue.head.value).toBe(1);
      expect(queue.tail.value).toBe(3);
      expect(queue.length).toBe(3);

      queue.dequeue();

      //After dequeue
      expect(queue.head.value).toBe(2);
      expect(queue.tail.value).toBe(3);
      expect(queue.length).toBe(2);
    });
  });
});