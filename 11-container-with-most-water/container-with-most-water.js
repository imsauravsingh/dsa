/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let left = 0;
    let right = height.length-1;
    let max = 0;
    let curr = 0;

    while(left<right){

        if(height[left]<height[right]){
            curr = height[left] * (right - left);
            left++
        } else {
            curr = height[right] * (right - left);
            right--
        }

        max = Math.max(max, curr);
    }

    return max;

  
};