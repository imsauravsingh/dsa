/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for(let i=0; i<strs.length; i++){
        const sortedStr = strs[i].split('').sort().join('');
        if(!map.has(sortedStr)){
            map.set(sortedStr, []);
        }

        map.get(sortedStr).push(strs[i]);

    }

    const res = [];
    for(let [key, val] of map){
        res.push(val);
    }
    return res;
};