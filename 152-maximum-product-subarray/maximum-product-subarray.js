/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let max = -Infinity;
    let prefix= 1;
    let suffix = 1;
    let n = nums.length;

    for(let i=0; i<n; i++){
        if(prefix===0) prefix = 1;
        if(suffix===0) suffix = 1;

        prefix = prefix * nums[i];
        suffix = suffix * nums[n-1-i];

        max = Math.max(max, prefix, suffix);
    }

    return max;
};

// Time complexity: O(n2)
// Space Complexity: O(1)