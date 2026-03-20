/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curr = 0;
    let max = -Infinity;
    for(let num of nums){
        curr = Math.max(num, num+curr);
        max = Math.max(max, curr);
    }

    return max;
};

// Time: O(n)
// Space: O(1)