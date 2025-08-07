//Write a function to find an element within the array and return the index. If not found, return -1

let array = [10,76,45,923,463,8,49]
function searchElement(array, target){
    for(let i = 0; i<array.length;i++){
        if (array[i] == target){
            return i //returns the index
        } 
    }
    return -1
}

console.log(searchElement(array, 45))