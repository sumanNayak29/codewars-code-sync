// Kata   : Even or Odd
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Mathematics, Fundamentals
// URL    : https://www.codewars.com/kata/even-or-odd
// Synced : 23/5/2026

function evenOrOdd(number) {
    return number % 2 === 0? 'Even':'Odd'
  
}
const chai = require('chai');
const assert = chai.assert;
​
describe("Sample tests",() => {
  
  it("2 is even", () => {
    assert.strictEqual(evenOrOdd(2), "Even");
  });
  
  it("7 is odd", () => {
    assert.strictEqual(evenOrOdd(7), "Odd");
  });
  
  it("-42 is even", () => {
    assert.strictEqual(evenOrOdd(-42), "Even");
  });
  
  it("-7 is odd", () => {
    assert.strictEqual(evenOrOdd(-7), "Odd");
  });