'use strict';

const Stack = require('../../stacks-and-queues/stacks');

describe('Stack',() => {
  describe('constructor', () => {
    it('creates an empty stack', () => {
      let stack = new Stack();

      expect(stack.length).toBe(0);
      expect(stack.head).toBe(null);
    });
  });
  describe('push', () => {
    it('throws an error',() => {
      let stack = new Stack();
      expect(()=> stack.push()).toThrowError('Push needs a value');
    });
  });
});