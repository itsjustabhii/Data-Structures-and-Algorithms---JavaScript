// let arr = ["D","O","R","E","M","O","N"]
// let arr = ['N','I','T','I','N']

// function palindrome(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=arr.length; j<=arr.length;j--){
//             if(arr[i] == arr[j]){
//                 console.log('It\'s a Palindrome!')
//             } else {
//                 console.log('Not a Palindrome!')
//             }
//         }
//     }
// }

// console.log(palindrome(arr))

let n = 1414

function Palindrome(n){
    if (n < 0) return false //checking for negative numbers

    let nCopy = n //storing the copy of original n because it gets changed later
    let reverse = 0
    while (n>0) {
        remainder = n % 10 //% -> gives remainder
        reverse = (10*reverse) + remainder //We are multiplying reverse by 10 because earlier, we would have divided the initial number by 10
        n = Math.floor(n/10) // / -> gives quotient
    }
    if(reverse === nCopy){
        return 'It\'s a Palindrome'
    } else {
        return 'Not a Palindrome!'
    }
}

let result = Palindrome(n)
console.log(result)