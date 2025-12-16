/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2) return x;

    let l=1,h=Math.floor(x/2),m=0;

    while(l<=h){
        m = Math.floor((l+h)/2);

        if(m*m===x) return m;
        else if(x>m*m){
            ans = m;
            l = m + 1;
        } else {
            h = m - 1;
        }
    }

    return ans;
    
};