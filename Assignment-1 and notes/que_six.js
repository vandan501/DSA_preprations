/*  <aside>
💡 **Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]

Output: true

</aside> */

const nums = [1, 5, 3, 2];
const checkRepeatedNumber = (e) => {
  const numCount = {};
  for (const num of e) {
    if (numCount[num]) {
      return true; 
    }
    numCount[num] = 1;
  }

  return false; 
};

console.log(checkRepeatedNumber(nums));
