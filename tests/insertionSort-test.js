var assert = require('chai').assert;
var makeArray = require('../lib/insertionSort.js');
var filterMe = require('../lib/insertionSort.js');
var verifySort = require('../lib/insertionSort.js');
import index from '../lib/index.js'

describe('insertion sort', () => {

  it('should generate an array of n numbers', () => {
    var arr = makeArray(1000, 'numbers');
    assert.equal(arr.length, 1000);
  })

  it.only('should sort a small array of numbers', () => {
    var sortedArray = filterMe(makeArray(5));
    assert.equal(verifySort(sortedArray), true);
  })

  it('should sort a small array of letters', () => {
    var sortedArray = filterMe(makeArray(5, 'letters'));
    assert.equal(verifySort(sortedArray), true);
  })

  it('should sort positive and negative numbers', () => {
    var sortedArray = filterMe(makeArray(10, 'numbers', -10));
    assert.equal(verifySort(sortedArray), true);
  }) 

  it('should sort a large array of numbers', () => {
    var sortedArray = filterMe(makeArray(500000));
    assert.equal(verifySort(sortedArray), true);
  })

  it('should sort a large array of letters', () => {
    var sortedArray = filterMe(makeArray(500000, 'letters'));
    assert.equal(verifySort(sortedArray), true);
  })


})
