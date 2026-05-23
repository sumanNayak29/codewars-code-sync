// Kata   : Find the stray number
// Rank   : 7 kyu
// Lang   : javascript
// Tags   : Fundamentals, Algorithms
// URL    : https://www.codewars.com/kata/find-the-stray-number
// Synced : 24/5/2026

function stray(numbers) {
  
  let strayNum = numbers[0]
​
for(let i= 1; i<numbers.length; i++){
if (strayNum !==  numbers[i]){
​
  if(numbers[i] === numbers[i+1] ){
  return strayNum
  }else {
   return numbers[i]
  }
​
}
​
}
}
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
​
​
describe("Sample Tests", () => {
  it("Should pass Sample Tests", () => {
    assert.strictEqual(stray([1, 1, 2]), 2);
    assert.strictEqual(stray([1, 2, 1]), 2);
    assert.strictEqual(stray([2, 1, 1]), 2);
  });
});
​