/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    const map = new Map();
    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }

    const arr = Array(nums.length + 1).fill(0).map(()=>[]);
    for(let [key, freq] of map){
        arr[freq].push(key);
    }

    const res = [];
    for(let i=arr.length-1; i>0 && res.length<k; i--){
        for(let num of arr[i]){
            res.push(num);
            if(res.length === k) break;
        }
    }

    return res;

}