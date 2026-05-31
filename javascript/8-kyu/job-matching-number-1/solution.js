// Kata   : Job Matching #1
// Rank   : 8 kyu
// Lang   : javascript
// Tags   : Algorithms
// URL    : https://www.codewars.com/kata/job-matching-number-1
// Synced : 31/5/2026

function match(candidate, job) {
  // is this job a valid match for the candidate?
  console.log(candidate,job)
  if (!candidate?.minSalary || !job?.maxSalary ) throw new Error("Missing salary information.");
 const adjustedMinSalary = candidate.minSalary * 0.9;
  return adjustedMinSalary <= job.maxSalary;
  
}
const Test = require('@codewars/test-compat');
​
describe("Tests", () => {
  it("test", () => {
let candidate1 = { minSalary: 120000 },
    job1 = { maxSalary: 130000 },
    job2 = { maxSalary: 80000 };
    
Test.assertEquals(match(candidate1, job1), true);
Test.assertEquals(match(candidate1, job2), false);
  });
});
​