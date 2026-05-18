/*
49. Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
*/

let strs = ["eat","tea","tan","ate","nat","bat"]
function groupAnagrams(strs){
    // Create an array of sorted characters for each string to use as a key
    // Anagrams will have identical sorted character sequences
    let sorted = strs.map((strs) => strs.split("").sort().join(""))

    // Initialize an empty object to store grouped anagrams
    // Key: sorted string, Value: array of original strings
    let map = {}

    // Iterate through each string in the input array
    for(let i = 0; i<strs.length; i++){
        // Check if this sorted key already exists in the map
        if(!map[sorted]){
            // If key doesn't exist, create a new array with the current string
            map[sorted[i]] = [strs[i]]
        }
        else {
            // If key exists, append the current string to the existing array
            map[sorted[i]].push(strs[i])
        }
    }
    // Return all grouped anagrams as an array of arrays
    return Object.values(map)
}

console.log(groupAnagrams(strs))

/**
 var groupAnagrams = function(strs) {
  const map = new Map();

  for (let word of strs) {
    const key = word.split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }

  return Array.from(map.values());
};
 */