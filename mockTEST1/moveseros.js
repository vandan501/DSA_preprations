
function moveZeroes(nums) 
{
  let currentNumber = 0; 
  for (let i = 0; i < nums.length; i++) 
  {
    if (nums[i] !== 0) {
      nums[currentNumber] = nums[i];
      currentNumber++;
    }
  }

  while (currentNumber < nums.length) {
    nums[currentNumber] = 0;
    currentNumber++;
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12])); 
console.log(moveZeroes([0])); 
