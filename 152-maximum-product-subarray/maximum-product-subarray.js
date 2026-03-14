/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let max = -Infinity;

    for(let i=0; i<nums.length; i++){
        let curr = 1;
        for(let j=i; j<nums.length; j++){
            curr = curr * nums[j];
            max = Math.max(max, curr);
        }
    }

    return max;
};

// Time complexity: O(n2)
// Space Complexity: O(1)