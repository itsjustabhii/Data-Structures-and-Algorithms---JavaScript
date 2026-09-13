/*
1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Check for time complexity O(n^2) and space complexity O(1)
*/

// function twoSum(arr, target) {
//     let n = arr.length
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             let sum = arr[i] + arr[j]
//             if (sum === target) {
//                 return [i, j]
//             }
//         }
//     }
// }
//O(n^2) time complexity because of the nested loops and 
// O(1) space complexity since we are not using any extra space that grows with input size.
//Not optimized


function twoSum(nums, target) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i]

        if (map.has(compliment)) {
            return [map.get(compliment), i]
        }
        map.set(nums[i], i)
    }
}
//O(n) time complexity because we are iterating through the array once and
// O(n) space complexity because we are using a map to store the elements and their indices.

let result = twoSum([2, 7, 11, 15], 13)
console.log(result)