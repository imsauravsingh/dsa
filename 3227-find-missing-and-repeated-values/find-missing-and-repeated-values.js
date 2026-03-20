/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {

    let dup = -1;
    let mis = -1;
    const set = new Set();
    const n = grid.length 

    for(nums of grid){
        for(num of nums){
            if(set.has(num)){
                dup = num;
            }else{
                set.add(num);
            }
        }
    }

    for(let i=1; i<=n*n; i++){
        if(!set.has(i)){
            mis = i;
            break;
        }
    }
    
    return [dup, mis]
};