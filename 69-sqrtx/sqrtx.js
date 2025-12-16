/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let ans = 1;

    for(let i=0; i<=x; i++){
        if(i*i<=x){
            ans = i;
        }else{
            break;
        }
    }
    return ans;
    
};