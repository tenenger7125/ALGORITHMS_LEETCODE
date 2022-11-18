/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const symbolObj = {
        I:1,
        IV:4,
        V:5,
        IX:9,
        X:10,
        XL:40,
        L:50,
        XC:90,
        C:100,
        CD:400,
        D:500,
        CM:900,
        M:1000
    }
    let answer = '';
    
    for (const [symbol, value] of Object.entries(symbolObj).sort((a,b)=>b[1]-a[1])) {
        while (num / value >= 1) {
            num -= value;
            answer += symbol;
        }
    }
    
    return answer;
};