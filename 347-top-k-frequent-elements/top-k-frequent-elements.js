/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    const map = new Map();
    const n = nums.length;
    for(let i=0; i<n; i++){
        map.set(nums[i], (map.get(nums[i]) || 0)+1);
    }

    const buckets = Array(n + 1).fill(0).map(()=>[]);
    for(let [key, freq] of map){
        buckets[freq].push(key);
    }

    const result = [];
    for(let i=buckets.length-1; i>0 && result.length<k; i--){
        for(let num of buckets[i]){
            result.push(num);
            if(result.length===k) break;
        }
    }

    return result;    
};