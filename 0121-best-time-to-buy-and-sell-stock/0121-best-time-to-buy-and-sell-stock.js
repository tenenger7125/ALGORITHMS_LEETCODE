/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const length = prices.length;
    let buyIdx = sellIdx = answer = 0;
    
    while (++sellIdx < length) {
        if (prices[buyIdx] < prices[sellIdx]) answer = Math.max(answer, prices[sellIdx] - prices[buyIdx]);
        else buyIdx = sellIdx;
    }
    
    return answer
};