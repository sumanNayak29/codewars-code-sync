// Kata   : Swap Values
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Debugging, Arrays, Fundamentals
// URL    : https://www.codewars.com/kata/swap-values
// Synced : 6/9/2026

function swapValues(arr) {
  (arr || arguments[0]).reverse();
}
describe("Tests", function() {
    const {assert} = require('chai');
​
    it("sample tests", function() {
        const array = ["a", "b"] 
        swapValues(array);
        assert.deepEqual(array, ["b", "a"]);
        swapValues(array);
        assert.deepEqual(array, ["a", "b"]);
    });
});