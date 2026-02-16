/**
 * @param {string} s
 * @return {string}
 */

var checkDrome = (i, j, s) => {

    while(i>=0 && j<s.length){
        if(s[i]!==s[j]) break;
        i--;
        j++;
    }

    return [i+1, j];

}
var longestPalindrome = function(s) {

    if(!s.length) return s;
    let max = [0,1];

    for(let i=0; i<s.length; i++){
        const odd = checkDrome(i-1, i, s);
        const even = checkDrome(i-1, i+1, s);

        const temp = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        max = max[1] - max[0] > temp[1] - temp[0] ? max : temp;
    }

    return s.slice(max[0], max[1]);
    
};