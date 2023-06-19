/* <aside>
💡 **Q4.** You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.

Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

</aside>    */
const digits = [2,3,5];
let carry = 1; 
for (let i = digits.length - 1; i >= 0; i--) 
{
  const sum = digits[i] + carry; 
  digits[i] = sum % 10; 
  carry = Math.floor(sum / 10); 
}

if (carry > 0) {
  digits.unshift(carry); 
}

console.log(digits);
