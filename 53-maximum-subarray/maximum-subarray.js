/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curr = 0;
    let max = -Infinity;
    let prefix = 0;
    let suffix = 0;
    for(let i=0; i<nums.length; i++){

        if(prefix<0) prefix=0;
        if(suffix<0) suffix=0;

        prefix +=nums[i];
        suffix +=nums[nums.length-1-i];

        max = Math.max(prefix, suffix, max);  

        
    }

    return max;
};

// Time: O(n)
// Space: O(1)