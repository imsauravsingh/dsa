/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let left = 0;
    let right = height.length -1;
    let max = - Infinity

    while(left<right){
        let area = 0;

        if(height[left]<height[right]){
            area = height[left] * (right - left);
            left++
        }else{
            area = height[right] * (right - left);
            right--
        }

        max = Math.max(area, max);
    }

    return max;
    
};