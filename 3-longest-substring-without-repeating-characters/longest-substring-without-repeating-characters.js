/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let left = 0;
    let right = 0;
    let ans = 0;
    const obj = new Set();
    
    while(right<s.length){
        if(!obj.has(s[right])) {
            obj.add(s[right]);
            right++;
        }else{
            obj.delete(s[left]);
            left++;
        }
        ans = Math.max(ans, right-left);
    }

    return ans;
    
};