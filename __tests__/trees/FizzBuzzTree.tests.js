'use strict';

import Tree from '../../binary_tree';
import fizzBuzzTree from '../../trees/FizzBuzzTrees';

describe('fizzBuzzTree', () => {
  it('can find the values of 3', () => {
    let tree = new Tree();
    tree.insert(6);
    tree.insert(3);
    tree.insert(1);
    tree.insert(101);

    fizzBuzzTree(tree);

    expect(tree.root.value).toBe('Fizz');
    expect(tree.root.left.value).toBe('Fizz');
    expect(tree.root.left.left.value).toBe(1);
    expect(tree.root.right.value).toBe(101);
  });
});