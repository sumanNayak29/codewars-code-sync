// Kata   : Merge two sorted arrays into one
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Fundamentals, Arrays
// URL    : https://www.codewars.com/kata/merge-two-sorted-arrays-into-one
// Synced : 14/9/2026

function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}
describe("Tests", () => {
  const {assert, config} = require('chai');
  config.truncateThreshold = 0;
​
  it("sample tests", () => {
    assert.deepEqual(mergeArrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8], "Basic tests");
    assert.deepEqual(mergeArrays([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10], "Basic tests");
    assert.deepEqual(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12], "Basic tests");
  });
});