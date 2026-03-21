/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let left = 0;
    const arr = [];
    let words = '';
    while(left<s.length){
        while(!checkStr(s[left])){ 
            if(words) arr.unshift(words);
            left++;
            words='';
        }
        words +=s[left];
        left++;
        if(left===s.length && words) arr.unshift(words);
    }

    return arr.join(' ');


};

function checkStr(char){
    return /[a-z0-9]/i.test(char);
}
