/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for(let i=0; i<strs.length; i++){
        // const sortedStr = strs[i].split('').sort().join('');
        const count = new Array(26).fill(0);
        for(let char of strs[i]){
            count[char.charCodeAt(0)-97]++;
        }
        const key = count.join('#'); 
        if(!map.has(key)){
            map.set(key, []);
        }

        map.get(key).push(strs[i]);
    }

    return Array.from(map.values());

};