'use strict';

const binarySearch = require('../array_binary_search');

describe('binarySeach', ()=>{
  it('checks if arguments are valid',()=>{
    expect(binarySearch()).toBe(null);
    expect(binarySearch([])).toBe(null);
    expect(binarySearch({'color':'red'})).toBe(null);
    expect(binarySearch([1,2])).toBe(null);
  });
  it('gives the index of key inside of arr',()=>{
    expect(binarySearch([1,2,3],2)).toBe(1);
    expect(binarySearch([1,2,3,4,5],5)).toBe(4);
    expect(binarySearch([1,2,3,4,5],2)).toBe(1);
    expect(binarySearch([1,2,3,4,5,6,7],1)).toBe(0);
  });
});