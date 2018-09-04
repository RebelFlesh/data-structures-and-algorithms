'use strict';

import Tree from '../binary_tree';

describe('tree', () => {
  describe('insert',() => {
    it('can create a root node if none exists', () => {
      let tree = new Tree();

      tree.insert(4);

      expect(tree.root).not.toBe(null);
      expect(tree.root.value).toBe(4);
    });
    it('adds a node to the left if it is less than the value', () => {
      let tree = new Tree();

      tree.insert(4);
      tree.insert(3);
      tree.insert(1);

      expect(tree.root.value).toBe(4);
      expect(tree.root.left.value).toBe(3);
      expect(tree.root.left.left.value).toBe(1);
    });
    it('can add a node to the right of the tree', () => {
      let tree = new Tree();

      tree.insert(4);
      tree.insert(6);
      tree.insert(100);

      expect(tree.root.value).toBe(4);
      expect(tree.root.right.value).toBe(6);
      expect(tree.root.right.right.value).toBe(100);
      expect(tree.root.right.right.parent.parent.value).toBe(4);
    });
    it('can insert nodes alternating left and right', () => {
      let tree = new Tree();

      tree.insert(4);
      tree.insert(2);
      tree.insert(3);
      tree.insert(6);
      tree.insert(5);

      expect(tree.root.left.right.value).toBe(3);
      expect(tree.root.right.left.value).toBe(5);
    });
    it('throws an error if given the same number to insert twice', () => {
      let tree = new Tree();
      tree.insert(4);
      tree.insert(2);
      expect(() => tree.insert(2)).toThrowError("This node exists in the tree already");
    });
  });
  describe('delete', () => {
    it("removes a given node from a tree", () => {
      let tree = new Tree();
      tree.insert(4);
      tree.insert(3);
      tree.insert(5);

      expect(tree.root.right.value).toBe(5);

      tree.remove(5);
      expect(tree.root.right).toBe(null);

      tree.remove(3);
      expect(tree.root.left).toBe(null);
    });
  });
}); 