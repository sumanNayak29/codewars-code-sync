// Kata   : Function 2 - squaring an argument
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Fundamentals
// URL    : https://www.codewars.com/kata/function-2-squaring-an-argument
// Synced : 23/5/2026

// Write the "square"-function here
function square(num){
  
  return num*num
  
}
const { assert } = require('chai');
​
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(square(3), 9);
  });
});
​