/**
 * Longest Substring Without Repeating Characters
Medium

Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.

Sliding window pattern
 */

function longestSubstring(s){
    let set = new Set() //Set to store unique characters in the current window
    let left = 0
    let maxLength = 0

    for(let right = 0; right<s.length; right++){ //Right pointer to expand the window
        //Remove duplicates from the set until we can add the current character
        while(set.has(s[right])){
            set.delete(s[left])
            left++
        }
        set.add(s[right]) //Add the current character to the set
        maxLength = Math.max(maxLength, right-left +1) //Update the maximum length of the substring
    }
    return maxLength
}

console.log(longestSubstring("abcabcbb"))