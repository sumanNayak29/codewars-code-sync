// Kata   : Keep up the hoop
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Fundamentals
// URL    : https://www.codewars.com/kata/keep-up-the-hoop
// Synced : 6/9/2026

function hoopCount (n) {
   //your code goes here    
  if (n>=10){
    return 'Great, now move on to tricks'
  }else {
    return 'Keep at it until you get it'
  }
}
const Test = require('@codewars/test-compat');
​
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(hoopCount(3),"Keep at it until you get it" ) 
Test.assertEquals(hoopCount(11),"Great, now move on to tricks" )
  });
});
​