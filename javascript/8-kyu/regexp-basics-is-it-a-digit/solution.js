// Kata   : Regexp Basics - is it a digit?
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Regular Expressions, Fundamentals
// URL    : https://www.codewars.com/kata/regexp-basics-is-it-a-digit
// Synced : 1/6/2026

String.prototype.digit = function() {
return /^\d$/.test(this);
  
};
const { assert } = require('chai');
​
describe('hex number', () => {
  it('Basic tests', () => {
    assert.strictEqual(''.digit(), false);
    assert.strictEqual('7'.digit(), true);
    assert.strictEqual(' '.digit(), false);
    assert.strictEqual('a'.digit(), false);
    assert.strictEqual('a5'.digit(), false);
    assert.strictEqual('14'.digit(), false);
  });
});
​