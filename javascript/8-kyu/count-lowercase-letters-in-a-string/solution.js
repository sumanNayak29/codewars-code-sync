// Kata   : count lowercase letters in a string
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Fundamentals, Regular Expressions, Algorithms
// URL    : https://www.codewars.com/kata/count-lowercase-letters-in-a-string
// Synced : 8/7/2026

function lowercaseCount(str) {
  const matches = str.match(/[a-z]/g);
  return matches ? matches.length : 0;
}
const Test = require('@codewars/test-compat');
​
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(lowercaseCount("abc"), 3);
Test.assertEquals(lowercaseCount("abcABC123"), 3);
Test.assertEquals(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3);
Test.assertEquals(lowercaseCount(""), 0)
Test.assertEquals(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
Test.assertEquals(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);
  });
});
​