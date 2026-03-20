/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curr = 0;
    let max = -Infinity;
    for(let num of nums){
        curr += num;
        max = Math.max(max, curr);
        if(curr<0){
            curr = 0;
        }
    }

    return max;
};

// Time: O(n)
// Space: O(1)