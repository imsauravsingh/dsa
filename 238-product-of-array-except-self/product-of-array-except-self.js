/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    const ans = [1];

    for(let i=1; i<nums.length; i++){
        ans[i] = ans[i-1] * nums[i-1];
    }
    
    
    let suffix = 1;
    for(let i=nums.length-1;  i>=0;  i--){
        ans[i] = ans[i] * suffix;
        suffix = suffix * nums[i];
    }


    return ans;
    
};