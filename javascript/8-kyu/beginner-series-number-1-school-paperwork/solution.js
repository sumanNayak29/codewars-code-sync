// Kata   : Beginner Series #1 School Paperwork
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Fundamentals
// URL    : https://www.codewars.com/kata/beginner-series-number-1-school-paperwork
// Synced : 24/5/2026

function paperwork(n, m) {
  return (n >0 && m>0 )? n*m : 0
}
​
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
​
describe("Simple Tests", function(){
  it("Testing for fixed tests", () => {
    assert.strictEqual(paperwork(5,5), 25, 'Failed at paperwork(5, 5)');
    assert.strictEqual(paperwork(5,-5), 0, 'Failed at paperwork(5, -5)');
    assert.strictEqual(paperwork(-5,-5), 0, 'Failed at paperwork(-5, -5)');
    assert.strictEqual(paperwork(-5,5), 0, 'Failed at paperwork(-5, 5)');
    assert.strictEqual(paperwork(5,0), 0, 'Failed at paperwork(5, 0)');
  });
});
​