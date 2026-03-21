/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // we can use bst search
    let row = matrix.length;
    let col = matrix[0].length;

    let totalElement = row * col;

    let left = 0;
    let right = totalElement-1;
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        let r = Math.floor(mid/col);
        let c = mid%col;
        const val = matrix[r][c];
        if(val===target) return true;

        if(val<target){
            left = mid+1;
        }else{
            right = mid - 1;
        }

    }

    return false;
    
};