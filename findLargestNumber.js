//To find the largest number in an array

let arr = [4387,7363,97,639,9353,46330,73947,48763,877,403,9,2.4,5,7,4,]
let largest = -Infinity //-infinity is the smallest number & Infinity is the largest number
function findLargestNumber(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]     
        }
    }
    return largest
}

let largestNumber = findLargestNumber(arr)
console.log(largestNumber)