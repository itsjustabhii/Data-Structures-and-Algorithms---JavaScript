//Find the second largest number in an array
//Need to compare the array elements with both the counters/variables
//-Infinity -> Is the lowest number
//Infinity -> Is the largest number

let arr = [4387,7363,97,639,9353,46330,73947,48763,877,403,9,2.4,5,7,4,]
let largest = -Infinity
let secondLargestNumber = -Infinity

function secondLargest(arr){
    if(arr.length<2){
        return null
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            secondLargestNumber = largest
            largest = arr[i]
        } else if (arr[i] > secondLargestNumber){
            secondLargestNumber = arr[i]
        }
    }
    return secondLargestNumber
}

console.log(secondLargest(arr))