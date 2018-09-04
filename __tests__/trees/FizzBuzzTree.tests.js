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
  it('can replace the values of 5', () => {
    let tree = new Tree();
    tree.insert(5);
    tree.insert(0);
    tree.insert(-5);
    tree.insert(44);
    tree.insert(40);

    fizzBuzzTree(tree);

    expect(tree.root.value).toBe('Buzz')
    expect(tree.root.left.value).toBe(0);
    expect(tree.root.left.left.value).toBe('Buzz');
    expect(tree.root.right.value).toBe(44);
    expect(tree.root.right.left.value).toBe('Buzz');
  });
});