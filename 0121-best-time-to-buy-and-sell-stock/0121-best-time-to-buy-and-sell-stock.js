/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const length = prices.length;
    let buyIdx = 0;
    let sellIdx = 1;
    let maxProfit = 0;
    
    while (sellIdx < length) {
        if (prices[buyIdx] < prices[sellIdx]) {
            const profit = prices[sellIdx] - prices[buyIdx];
            
            maxProfit = Math.max(maxProfit, profit);
        } else {
            buyIdx = sellIdx;
        }
        
        sellIdx++;
    }
    
    return maxProfit
};