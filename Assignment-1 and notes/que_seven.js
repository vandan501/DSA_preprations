/*
<aside>
💡 **Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.

**Example 1:**
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

</aside>*/
const nums = [0, 1, 0, 3, 12];
const CheckZeroINValues = (arr) => {
    let zeroIndex = 0; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[zeroIndex] = arr[i];
      zeroIndex++;
    }
  }
  while (zeroIndex < arr.length) {
    arr[zeroIndex] = 0;
    zeroIndex++;
  }

  return arr;
};

console.log(CheckZeroINValues(nums));
