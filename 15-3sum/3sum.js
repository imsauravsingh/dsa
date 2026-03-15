/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    const result = [];
    nums.sort((a,b)=>a-b);

    for(let i=0; i<nums.length; i++){
        let j = i+1;
        let k = nums.length - 1;

        if(i>0 && nums[i]===nums[i-1]) continue;

        while(j<k){
            let total = nums[i] + nums[j] + nums[k];

            if(total===0){
                result.push([nums[i], nums[j], nums[k]]);

                while(j<k && nums[j]===nums[j+1]) j++;
                while(j<k && nums[k]===nums[k-1]) k--;

                j++;
                k--;
            }else if(total<0){
                j++;
            }else{
                k--;
            }
        }


    }
    return result;

};