/**
 * 53. Maximum Subarray
  Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 */

let nums = [-2,1,-3,4,-1,2,1,-5,4]
function maxSubArray(nums){
    let currentSum = nums[0] // current running sum
    let maxSum = nums[0]  // max sum so far

    for(let i=1; i<nums.length; i++){
        // Either extend the current subarray or start a new one
        currentSum = Math.max(nums[i], currentSum+nums[i])

        // Update global maximum if needed
        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum
}

console.log(maxSubArray(nums))