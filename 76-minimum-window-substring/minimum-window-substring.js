/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length > s.length) return '';

    const sMap = new Map();
    const tMap = new Map();

    for(let char of t){
        tMap.set(char, (tMap.get(char) || 0) + 1);
    }

    let left = 0;
    let minLen = Infinity;
    let res = [-1, -1];
    let currentSize = 0;
    let requiredSize = tMap.size;

    for(let right=0; right<s.length; right++){
        const char = s[right];
        sMap.set(char, (sMap.get(char) || 0) + 1);

        if(tMap.has(char) && sMap.get(char)===tMap.get(char)){
            currentSize++;
        }

        while(currentSize === requiredSize){

            if(right-left+1 < minLen){
                res = [left, right];
                minLen = right-left + 1;
            }
            let leftChar = s[left];
            sMap.set(leftChar, sMap.get(leftChar) - 1);

            if (tMap.has(leftChar) && sMap.get(leftChar) < tMap.get(leftChar)) {
                currentSize--;
            }
            left++;
        }


    }
    
    let [l, r] = res;
    return minLen === Infinity ? "" : s.substring(l, r + 1);
};