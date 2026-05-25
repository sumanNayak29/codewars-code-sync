// Kata   : Who ate the cookie?
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Fundamentals
// URL    : https://www.codewars.com/kata/who-ate-the-cookie
// Synced : 25/5/2026

function cookie(x){
  // ...
   let whoAteCookie = 'the dog'
  
  if (typeof(x) === 'string'){
    whoAteCookie = 'Zach'
  }else if(typeof(x) === 'number' ){
       whoAteCookie = 'Monica'
  }
return(`Who ate the last cookie? It was ${whoAteCookie}!`)
}
const { assert } = require('chai');
​
describe('Example tests', () => {
  it('should return correct messages for given inputs', () => {
    assert.strictEqual(cookie("Ryan"), "Who ate the last cookie? It was Zach!");
    assert.strictEqual(cookie(26), "Who ate the last cookie? It was Monica!");
    assert.strictEqual(cookie(2.3), "Who ate the last cookie? It was Monica!");
    assert.strictEqual(cookie(true), "Who ate the last cookie? It was the dog!");
  });
});
​