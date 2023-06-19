/*   
<aside>
💡 **Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

</aside>

*/
const findErrorNums = (nums) => {
    const frequency = Array(nums.length + 1).fill(0);
    let duplicateNum, missingNum;
  
    for (const num of nums) {
      frequency[num]++;
    }
  
    for (let i = 1; i < frequency.length; i++) {
      if (frequency[i] === 2) {
        duplicateNum = i;
      } else if (frequency[i] === 0) {
        missingNum = i;
      }
    }
  
    return [duplicateNum, missingNum];
  };
  
  const nums = [1, 2, 2, 4];
  console.log(findErrorNums(nums));
  