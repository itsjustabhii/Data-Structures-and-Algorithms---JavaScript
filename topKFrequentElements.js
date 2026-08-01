/**
 * Top K Frequent Elements
 * Given an integer array nums and an integer k, return the k most frequent elements within the array.
 *
 * Example:
 * Input: nums = [1,2,2,3,3,3], k = 2
 * Output: [2,3]
 */

function topKFrequent(nums, k) {
        // Build a frequency map where key = number and value = count.
        const count = {};
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        // Convert the map to an array of [frequency, number] pairs.
        // Using frequency first makes it easier to sort by count.
        const arr = Object.entries(count).map(([num, freq]) => [
            freq,
            parseInt(num),
        ]);

        // Sort pairs in descending order of frequency.
        arr.sort((a, b) => b[0] - a[0]);

        // Take the top k entries and return only their numbers.
        return arr.slice(0, k).map((pair) => pair[1]);
    }

// Example usage
console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2)) // [3, 2] or [2, 3]