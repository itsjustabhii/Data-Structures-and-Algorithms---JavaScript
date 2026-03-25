/**
 * 3Sum -> Two pointers pattern
Medium

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

The output should not contain any duplicate triplets. You may return the output and the triplets in any order.
 * 
 */

/**
 * Psuedo Code
 * Sort the array
 * Initialize an empty array for result
 * check for duplicates and skip
 * set left and right positions
 * while(left<right)
 * check for sum if it's equal to 0
 * check for duplicates
 * return
 * 
 */

function threeSum(nums){
    nums.sort((a,b) => a-b)

    let result = []

    for(let i=0; i<nums.length; i++){
        //Skip duplicates i
        if(i > 0 && nums[i] === nums[i-1]) continue

        let left = i+1
        let right = nums.length-1

        while(left < right){
            let sum = nums[i] + nums[left] + nums[right]

            if(sum === 0){
                result.push([nums[i], nums[left], nums[right]])
                left++
                right--

                //Skip duplicates left & right
                while(left < right && nums[left] === nums[left-1]) left++
                while(left < right && nums[right] === nums[right+1]) right--
            } else if(sum < 0){
                left++
            } else {
                right--
            }
        }
    }
    return result
}

console.log(threeSum([-1,0,1,2,-1,-4]))