/*
217. Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

let nums = [1,3,2,4]
function containsDuplicate(nums){
    let set = new Set(nums)

    return set.size != nums.length
}

console.log(containsDuplicate(nums))