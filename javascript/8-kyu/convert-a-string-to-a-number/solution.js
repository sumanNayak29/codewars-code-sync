// Kata   : Convert a String to a Number!
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Parsing, Strings, Fundamentals
// URL    : https://www.codewars.com/kata/convert-a-string-to-a-number
// Synced : 11/9/2026

const stringToNumber = function(str){
  // put your code here
  return Number(str)
}
const Test = require('@codewars/test-compat');
​
describe( "stringToNumber", function(){
  it( "should work for the examples" , function(){
    Test.assertEquals(stringToNumber("1234"),1234)
    Test.assertEquals(stringToNumber("605"), 605)
    Test.assertEquals(stringToNumber("1405"),1405)
    Test.assertEquals(stringToNumber("-7"),  -7)
  });
});