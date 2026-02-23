/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let buy = 0;
    let sell = 1;

    let result = 0;

    while(sell<prices.length){
        if(prices[buy] > prices[sell]){
            buy=sell;
        }else{
            result = Math.max(result, prices[sell] - prices[buy]);
        }
        sell++;
    }

    return result;
    
};