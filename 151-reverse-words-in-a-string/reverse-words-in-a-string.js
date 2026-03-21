/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let left = 0;
    const arr = [];
    let words = '';
    while(left<s.length){
        while(left < s.length && s[left]===" "){ 
            if(words) arr.push(words);
            left++;
            words='';
        }
        words +=s[left];
        left++;
        if(left===s.length && words) arr.push(words);
    }

    return arr.reverse().join(' ');
};