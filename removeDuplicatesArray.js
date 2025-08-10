//Remove Duplicates from Sorted Array and provide the total number of unique elements

//Here, we're using two pointers to solve the problem

let nums = [0,0,1,1,1,2,2,3,3,4]

function removeDuplicates(nums){
    let x = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] > nums[x]){ //Checks if the i pointer is greated than the x pointer
            x = x + 1   //shifts the x point to the next place
            nums[x] = nums[i] //updates the value of x 
        }
    }
    return x+1 //gives the total number of unique elements in an array
}

let result = removeDuplicates(nums)

console.log(result)