/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let idx = 0;
    let i = 0;
    let n = chars.length;

    while(i<n){
        let char = chars[i];
        let count = 0;
        while(i<n && chars[i]==char){
            count++;
            i++;
        }

        if(count==1){
            chars[idx++] = char;
        }else{
            chars[idx++] = char;
            let digits = count.toString();
            for(let digit of digits){
                chars[idx++] = digit
            }
        }
    }

    return idx;

};