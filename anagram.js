/*
Valid Anagram
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
*/

function anagram(s,t){
    //Check the length of both the strings
    if(s.length != t.length){
        return false
    }
    let sSort = s.split("").sort().join()
    let tSort = t.split("").sort().join()

    return sSort === tSort
}

console.log(anagram('racecar', 'carrace'))