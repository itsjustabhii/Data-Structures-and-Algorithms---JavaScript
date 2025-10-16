/*
1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

function twoSum(arr,target){
    let n = arr.length
    for(let i=0; i<n-1; i++){
        for(let j=i+1; j<n; j++){
            let sum = arr[i]+arr[j]
            if(sum === target){
                return(i,j)
            }
        }
    }
}

let result = twoSum([1,5,6,12,25],30)
console.log(result)