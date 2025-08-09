//Write a code to count the number of digits in a variable/
//Remember to use while loop and divide the number by 10 when finding the number of digits 

let n = -639345
n = Math.abs(n) //To convert a negative number to positive number (abs-> absolute)

function countDigits(n){
    if (n == 0) return 1 //corner case for when value of n is 0
    let count = 0

    while (n>0){
        n = Math.floor(n/10)
        count++
    }
    return count
}

console.log(countDigits(n))

