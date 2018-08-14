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
