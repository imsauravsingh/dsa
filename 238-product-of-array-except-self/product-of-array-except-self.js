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
    for(let i=nums.length-2; i>=0; i--){
        suffix = suffix * nums[i+1];
        ans[i] = ans[i] * suffix;
    }

    // const arr = [];
    // for(let i=0; i<nums.length; i++){
    //     arr[i] = prefix[i] * suffix[i];
    // }

    return ans;

    
};