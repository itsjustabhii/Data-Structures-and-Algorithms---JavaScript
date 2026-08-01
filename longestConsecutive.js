/**
 * Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

You must write an algorithm that runs in O(n) time.
 */

/**
 * 
 * This belongs to Hash Set & Sequence detection pattern
 * Solution:-
 * Use a Hash Set to store all numbers so we can check if a number exists in O(1) time.

We only start building a sequence when we find the start of a sequence, which happens when:

num - 1 is NOT in the set

This means the current number is the first number of a consecutive sequence.

Algorithm Steps

Insert all numbers into a Set.

Iterate through the set.

If (num - 1) does not exist, it means a sequence starts here.

Expand the sequence by checking num + 1, num + 2, etc.

Track the maximum length found.
 */

function largestConsecutive(nums){
    // Create a set from nums for O(1) membership checks.
    // Duplicate values are removed automatically.
    let set = new Set(nums)

    // Track the longest consecutive sequence found so far.
    let longest = 0

    // Iterate over unique numbers in the set.
    for(let num of set){
        // Only start counting when num is the beginning of a sequence.
        // If num - 1 exists, then num is not the first number.
        if(!set.has(num -1)){
            let current = num
            let length = 1

            // Expand the sequence while the next number exists in the set.
            while(set.has(current + 1)){
                current++
                length++
            }

            // Update the longest length if this sequence is bigger.
            longest = Math.max(longest, length)
        }
    }

    // Return the length of the longest consecutive sequence.
    return longest
}

// Example usage and quick sanity check.
console.log(largestConsecutive([2, 20, 4, 10, 3, 4, 5]))