/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    const prefix = [1];

    for(let i=1; i<nums.length; i++){
        prefix[i] = prefix[i-1] * nums[i-1];
    }
    
    let suffix = 1;
    for(let i=nums.length-2; i>=0; i--){
        suffix = suffix * nums[i+1];
        prefix[i] = prefix[i] * suffix;
    }

    return prefix;

};