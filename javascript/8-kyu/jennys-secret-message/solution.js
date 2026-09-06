// Kata   : Jenny's secret message
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Debugging
// URL    : https://www.codewars.com/kata/jennys-secret-message
// Synced : 6/9/2026

function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}
const Test = require('@codewars/test-compat');
​
describe("Jenny's greeting function", function(){
  it("should greet some people normally",function(){
    Test.assertEquals(greet("Jim"), "Hello, Jim!");
    Test.assertEquals(greet("Jane"), "Hello, Jane!");
    Test.assertEquals(greet("Simon"), "Hello, Simon!");
  });
  it("should greet Johnny a little bit more special",function(){
    Test.assertEquals(greet("Johnny"), "Hello, my love!");
  });
});