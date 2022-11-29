/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let answer = 0;
    
    for (let i=0; i<prices.length; i++) {
        if (minPrice > prices[i]) {
            minPrice = prices[i]
            let j = i;
            
            while (++j < prices.length) {
                if (minPrice > prices[j]) continue;
                
                answer = Math.max(prices[j] - minPrice, answer)
            }
        };
    }
    
    return answer
};