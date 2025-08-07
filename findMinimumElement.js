//To find the minimum element in an array

let arr = [4387,7363,97,639,9353,46330,-936,73947,48763,877,403,9,2.4,5,7,4,]

let smallest = Infinity

function findMinimum(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i]
        }
    }
    return smallest
}

console.log(findMinimum(arr))