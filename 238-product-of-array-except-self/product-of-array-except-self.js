/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    const prefix = [1];
    const ans = [1];
    for(let i=1; i<nums.length; i++){
        prefix[i] = prefix[i-1] * nums[i-1];
        ans[i] = ans[i-1] * nums[i-1];
    }

    const suffix = []; suffix[nums.length-1] = 1;
    for(let i=nums.length-2; i>=0; i--){
        suffix[i] = suffix[i+1] * nums[i+1];
        ans[i] = ans[i] * suffix[i];
    }

    // const arr = [];
    // for(let i=0; i<nums.length; i++){
    //     arr[i] = prefix[i] * suffix[i];
    // }

    return ans;

    
};