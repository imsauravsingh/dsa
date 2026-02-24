/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProd = - Infinity;

    for(let i = 0; i<nums.length; i++){
        let prod = 1;
        for(let j=i; j<nums.length; j++){
            prod *=nums[j];
            maxProd = Math.max(maxProd, prod);
        }
    }
    return maxProd;

    
};