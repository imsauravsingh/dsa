/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const obj = new Map();

    for(let i=0; i<nums.length; i++){
        const val = target - nums[i];

        if(obj.has(val)) return [i, obj.get(val)];

        obj.set(nums[i], i);
    }
};