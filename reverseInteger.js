//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

let n = -123456

function reverseInteger(n){
    
    let nCopy = n
    n = Math.abs(n)

    let reverse = 0
    while(n > 0) {
        remainder = n%10 //to find the last digit
        reverse = (10*reverse) + remainder
        n = Math.floor(n/10)
    }
    if (nCopy < 0) { // this checks if the given number is negative, to return the result as negative
        return -reverse
    } else return reverse
}
console.log(reverseInteger(n))