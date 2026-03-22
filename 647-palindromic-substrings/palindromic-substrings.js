/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {

    let max = 0;

    for(let i=0; i<s.length; i++){
        max += checkDrome(i, i+1, s);
        max += checkDrome(i, i, s);

        // max = Math.max(odd, even, max);
    }

    return max;

    
};

const checkDrome = (i, j, s) => {
    let count = 0;
    while(i>=0 && j<s.length && s[i]==s[j]){
        count++;
        i--;
        j++;
    }

    return count;
}