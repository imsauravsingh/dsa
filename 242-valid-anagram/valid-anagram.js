/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const sval = s.split('').sort().join('');
    const tval = t.split('').sort().join('');

    if(sval!==tval) return false

    return true;     
};