/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const total = nums.reduce((acc, val)=> acc +=val, 0);
    let left = 0;
    let right=0;
    for(let i=0; i<nums.length; i++){
        right = total - nums[i] - left;

        if(left === right) return i;

        left += nums[i];
    }
    

    return -1;
};