/**
 * Container With Most Water
 --> Two pointers pattern
You are given an integer array heights where heights[i] represents the height of the ith bar.

You may choose any two bars to form a container. Return the maximum amount of water a container can store.
 */

function mostWater(height){
    let left = 0
    let right = height.length-1
    let maxArea = 0

    while(left < right){
        let h = Math.min(height[left], height[right])
        let w = right - left
        area = h * w

        maxArea = Math.max(maxArea, area)

        if(height[left] < height[right]){
            left++
        } else{
            right--
        }
    }
    return maxArea
}

console.log(mostWater([1,8,6,2,5,4,8,3,7]))