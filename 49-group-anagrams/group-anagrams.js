/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    const base = 'a'.charCodeAt(0);

    for(let str of strs){
        const strArr = new Uint8Array(26);
        for(let char of str){
            strArr[char.charCodeAt(0)-base]++;
        }
        const key = strArr.toString();
        if(!map.has(key)){
            map.set(key, []);
        }
        map.get(key).push(str);

    }

    return Array.from(map.values());

};