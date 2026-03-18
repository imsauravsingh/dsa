/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left= 0; 
    let maxFreq = 0;
    let maxLen= 0;
    let map = new Map();

    for(let right=0; right<s.length; right++){
        const char = s[right];
        map.set(char, (map.get(char) || 0) + 1);

        maxFreq = Math.max(maxFreq, map.get(char));

        while((right - left + 1) - maxFreq > k){
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }

        maxLen = Math.max(maxLen, (right-left + 1));
    }
    
    return maxLen;
};