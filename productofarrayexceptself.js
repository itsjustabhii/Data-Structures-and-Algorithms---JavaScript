/*
238. Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

var nums = [1,2,3,4]
function productExceptSelf(nums){    
    let n = nums.length
    let result = new Array(n).fill(1) // initialize the new array with 1

    //calculate prefix
    let prefix = 1
    for(let i = 0; i<n; i++){
        result[i] = prefix
        prefix *= nums[i]
    }

    //calculate suffix
    let suffix = 1
    for(let i = n-1; i >= 0; i--){
        result[i] *= suffix
        suffix *= nums[i]
    }
    return result
}

console.log(productExceptSelf(nums))