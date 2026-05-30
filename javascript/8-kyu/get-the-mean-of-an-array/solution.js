// Kata   : Get the mean of an array
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Arrays, Algorithms
// URL    : https://www.codewars.com/kata/get-the-mean-of-an-array
// Synced : 30/5/2026

function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  return Math.floor(marks.reduce((acc,curr)=> acc+curr)/marks.length)
}
const Test = require('@codewars/test-compat');
​
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(getAverage([2,2,2,2]),2);
Test.assertEquals(getAverage([1,2,3,4,5,]),3);
Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);
​
​
  });
});
​