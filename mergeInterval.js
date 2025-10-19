/*
56. Merge Intervals
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
 */

let interval = [[1,3],[2,6],[8,10],[15,18]]
function merge(interval){
    //Sort the interval
    interval.sort((a,b) => a[0]-b[0])

    //Initialize the interval 
    let merged = [interval[0]]

    //Iterate through the interval
    for(let i=1; i<interval-1; i++){
        let lastMerged = merge(merge.length-1)
        let current = interval[i]

        if(current[0] <= lastMerged[1]){
            lastMerged = Math.max(lastMerged[1], current[1])
        }
        else {
            merged.push(interval)
        }
    }
    return merged
}

console.log(merge())