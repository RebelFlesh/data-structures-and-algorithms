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
   it('gives index of key inside of even arrays',()=>{
    expect(binarySearch([1,2,3,4],1)).toBe(0);
    expect(binarySearch([1,2,3,4],2)).toBe(1);
    expect(binarySearch([1,2,3,4],3)).toBe(2);
    expect(binarySearch([1,2,3,4],4)).toBe(3);
   })
  it('give -1 index if key is not in the array',()=>{
    expect(binarySearch([4,8,15,16,23,42], 5)).toBe(-1);
    expect(binarySearch([1,2,3],8)).toBe(-1);
    expect(binarySearch([1,2,3],100000)).toBe(-1);
    expect(binarySearch([1,2,3],-7)).toBe(-1);
  });
});