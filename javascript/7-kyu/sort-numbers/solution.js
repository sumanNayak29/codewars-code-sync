// Kata   : Sort Numbers
// Rank   : 7 kyu
// Lang   : javascript
// Tags   : Fundamentals
// URL    : https://www.codewars.com/kata/sort-numbers
// Synced : 24/5/2026

function solution(nums){
  
  if (!nums) return []
  
  return nums.sort((a,b)=> a-b)
​
}
const { assert } = require("chai")
​
describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(solution([1,2,3,10,5]), [1,2,3,5,10])
    assert.deepEqual(solution(null), [])
    assert.deepEqual(solution([]), [])
    assert.deepEqual(solution([20, 2, 10]), [2,10,20])
    assert.deepEqual(solution([2, 20, 10]), [2,10,20])
  })
})