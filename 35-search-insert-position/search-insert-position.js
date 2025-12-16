/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    let l=0, h=nums.length-1,m;

    while(l<=h){
        m = Math.floor((l+h)/2);
        if(nums[m]===target) return m
        else if(target>nums[m]) l = m + 1;
        else h = m - 1;
    }

    return l;
    
};