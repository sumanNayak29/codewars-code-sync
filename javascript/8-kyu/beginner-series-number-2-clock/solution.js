// Kata   : Beginner Series #2 Clock
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Fundamentals
// URL    : https://www.codewars.com/kata/beginner-series-number-2-clock
// Synced : 24/5/2026

function past(h, m, s){
  //#Happy Coding! ^_^
  const milisecInHours = 60*60*1000
  const milisecInMinutes = 60*1000
  const milisecInSec = 1000
  
  return h*milisecInHours+m*milisecInMinutes+s*milisecInSec
}
const { assert } = require('chai');
​
describe("Fixed Tests", () => {
  it("Tests", () => {
    assert.strictEqual(past(0,1,1),61000)
    assert.strictEqual(past(1,1,1),3661000)
    assert.strictEqual(past(0,0,0),0)
    assert.strictEqual(past(1,0,1),3601000)
    assert.strictEqual(past(1,0,0),3600000)
  });
});