/*<aside>
💡 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [1,3,5,6], target = 5

Output: 2

</aside>*/


const nums=[1,2,3,4,5];
const target=5;

const SearchElement=(nums,target)=>{
    for(let i=0;i<=nums.length;i++)
    {
        if(nums[i]===target)
        {
            return i;
        }
    }
    if(nums[i]!==target)
    {
        console.log("OOPS number not found")
    }
}

const index=SearchElement(nums,target);
console.log(index)