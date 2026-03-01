/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const map = new Map();
    for(let i=0; i<nums.length; i++){
        const val = target - nums[i];

        if(!map.has(val)){
            map.set(nums[i], i);                                                                  
        }else{
            const checkIndex = map.get(val);
            const index = i;
            return [checkIndex,index]
        }
    }
};