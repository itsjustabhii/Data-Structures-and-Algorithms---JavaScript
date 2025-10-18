/*
125. Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

let s = "A man, a plan, a canal: Panama"
function validPalindrome(s){
    //convert the string into lowercase
    s = s.toLowerCase()

    //Filtered string
    let filteredString = ""

    for(let i = 0; i<s.length; i++){
        if(s[i].match(/[a-z0-9]/i)){
            filteredString += s[i]
        }
    }
    //reverse the string
    let reverse = filteredString.split("").reverse().join("")

    return reverse === filteredString
}

let result = validPalindrome()
console.log(result)