'use strict';

const shift = require('../array_shift');

describe('insertShiftArray',()=>{
  it('takes 2 valid inputs',()=>{
    expect(shift()).toBe(null)
    expect(shift([1,2,3])).toBe(null);
    expect(shift(7,[1,2])).toBe(null);
  });

  it('inserts value in the middle of an even lengthed array',()=>{
    expect(shift([1,2,3,4],5)).toEqual([1,2,5,3,4]);
    expect(shift([1,2,3,4],'x')).toEqual([1,2,'x',3,4]);
    expect(shift([7,8,9,10],[1,2])).toEqual([7,8,[1,2],9,10]);
  });

  it('inserts value to the right of the center number if the array is odd',()=>{
    expect(shift([1,2,3],true)).toEqual([1,2,true,3]);
    expect(shift([5,6,8],7)).toEqual([5,6,7,8]);
    expect(shift([{type:'ice cream'}],{flavor:'chocolate'})).toEqual([{type:'ice cream'},{flavor:'chocolate'}]);
  });
});