'use strict';

const binarySearch = require('../array_binary_search');

describe('binarySeach', ()=>{
  it('checks if arguments are valid',()=>{
    expect(binarySearch()).toBe(null);
    expect(binarySearch([])).toBe(null);
    expect(binarySearch({'color':'red'})).toBe(null);
    expect(binarySearch([1,2])).toBe(null);
  });
});