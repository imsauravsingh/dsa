/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for(let i=1; i<nums.length; i++){

        let tempMax = Math.max(nums[i], nums[i] * maxProd, nums[i] * minProd)
        minProd = Math.min(nums[i], nums[i] * maxProd, nums[i] * minProd);
        maxProd = tempMax;
        result = Math.max(result, maxProd);
    }

    return result;
    
};