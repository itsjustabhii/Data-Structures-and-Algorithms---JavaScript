/*
49. Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
*/

let strs = ["eat","tea","tan","ate","nat","bat"]
function groupAnagrams(strs){
    //Sort the anagrams
    let sorted = strs.map((strs) => strs.split("").sort().join(""))

    let map = {}

    for(let i = 0; i<strs.length; i++){
        if(!map[sorted]){
            map[sorted[i]] = [strs[i]]
        }
        else {
            map[sorted[i]].push(strs[i])
        }
    }
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