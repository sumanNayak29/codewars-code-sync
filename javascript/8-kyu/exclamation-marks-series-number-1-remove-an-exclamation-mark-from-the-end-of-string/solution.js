// Kata   : Exclamation marks series #1: Remove an exclamation mark from the end of string
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Fundamentals, Strings
// URL    : https://www.codewars.com/kata/exclamation-marks-series-number-1-remove-an-exclamation-mark-from-the-end-of-string
// Synced : 16/9/2026

function remove (string) {
if (string.endsWith('!')) {
    return string.slice(0, -1); 
  }
  return string;
}
const strictEqual = require("chai").assert.strictEqual;
​
function doTest(input, expected) {
  const actual = remove(input);
  strictEqual(actual, expected, `for string:\n"${input}"\n`);
}
​
describe("Tests suite", function () {
  it("sample tests", function () {
    doTest("Hi!", "Hi");
    doTest("Hi!!!", "Hi!!");
    doTest("!Hi", "!Hi");
    doTest("!Hi!", "!Hi");
    doTest("Hi! Hi!", "Hi! Hi");
    doTest("Hi", "Hi");
  });
});