/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = -Infinity;
    let pre = 1;
    let suff = 1;
    for(let i=0; i<nums.length; i++){
        if(pre===0) pre = 1;
        if(suff===0) suff = 1;

        pre *= nums[i];
        suff *= nums[nums.length - i -1];
        max = Math.max(max, pre, suff);
    }

    return max;

};

// Time complexity: O(n)
// Space Complexity: O(1)