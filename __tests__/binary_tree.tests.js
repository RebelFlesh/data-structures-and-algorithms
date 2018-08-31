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
  });
});