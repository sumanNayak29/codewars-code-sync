// Kata   : Reversed sequence
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Fundamentals
// URL    : https://www.codewars.com/kata/reversed-sequence
// Synced : 23/5/2026

const reverseSeq = n => {
  const newArray = []
  
   for(let i=1;n>=i;i++){
    newArray.push(i)
  }
  return newArray.reverse()
};
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
​
describe("reverseSeq", function() {
  it("Sample Test", function() {
    assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
  });
});