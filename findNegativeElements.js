//To find the number of negative elements in the array

let arr = [10, -8,-4,39,-629,-835,716,-94,945]
let counter = 0

function findNegativeElements(arr,counter){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] < 0){
            counter++
        }
    }
        return counter
}

console.log(findNegativeElements(arr,counter))