/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {

    let count = 0;

    for(let i=1; i<arr.length-1;){

        if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
            let left = i; 
            let right = i;

            while(left>0 && arr[left]>arr[left-1]) left--;
            while(right<arr.length-1 && arr[right]>arr[right+1])
            {
                right++;
                i++;
            }
            count = Math.max(count, right-left + 1 );
        }else{
            i++;
        }
    }

    return count;
    
};