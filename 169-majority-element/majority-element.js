/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let counter = 1;
    let n = nums[0];
    for(let i=1; i<nums.length; i++){

        if(n === nums[i]){ 
            counter++;
        } else {
            counter--;
            if(counter===0){
                n = nums[i];
                counter++;
            }
        }
    }

    return n;
    
};