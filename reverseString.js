//344.Write a function that reverses a string. The input string is given as an array of characters s.

let s = ['a', 'b', 'c', 'd']

function reverseString(s){
    let len = s.length
    let halfLen = Math.floor(len/2)

    for(let i=0; i<halfLen; i++){
        let temp = s[i]
        s[i] = s[len-i-1]
        s[len-i-1] = temp
    }
}

console.log(reverseString(s))