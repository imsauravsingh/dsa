/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let ans = 0;
    let set = new Set();

    while(right<s.length){

        if(!set.has(s[right])){
            set.add(s[right]);
            right++;
        }else{
            set.delete(s[left]);
            left++;
        }

        ans = Math.max(ans, right-left);
    }

    return ans;

    
};