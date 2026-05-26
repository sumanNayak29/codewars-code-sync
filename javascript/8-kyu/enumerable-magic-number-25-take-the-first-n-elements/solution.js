// Kata   : Enumerable Magic #25 - Take the First N Elements
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Fundamentals
// URL    : https://www.codewars.com/kata/enumerable-magic-number-25-take-the-first-n-elements
// Synced : 26/5/2026

function take(arr, n) {
  // Your code here
  return arr.slice(0,n)
}
const Test = require('@codewars/test-compat');
​
describe("Sample Tests", function(){
  it("should work for sample tests", function(){
    Test.assertDeepEquals(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");
  });
});