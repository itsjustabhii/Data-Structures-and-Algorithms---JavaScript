//27. Remove elements
//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

let nums = [1,4,2,6,8,4,2,6,7,4]

let val = 4

function removeElements(nums, val){
    let x = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){ //shift element to left if value of nums is not equal to val
            nums[x] = nums[i]
            x++
        }
    }
    return x //X prints the number of elements apart from val
}

console.log(removeElements(nums,val))