// Kata   : Reversed Strings
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Strings, Fundamentals
// URL    : https://www.codewars.com/kata/reversed-strings
// Synced : 23/5/2026

function solution(str){
  
  return str.split('').reverse().join('')
  
}
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
​
describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(solution('world'), 'dlrow');
    assert.strictEqual(solution('hello'), 'olleh');
    assert.strictEqual(solution(''), '');
    assert.strictEqual(solution('h'), 'h');
  });
});