'use strict';

const shift = require('../array_shift');

describe('insertShiftArray',()=>{
  it('takes 2 valid inputs',()=>{
    expect(shift()).toBe(null)
    expect(shift([1,2,3])).toBe(null);
    expect(shift(7,[1,2])).toBe(null);
  });
