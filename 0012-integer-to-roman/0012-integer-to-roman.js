/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const symbolObj = {
        1:'I',
        4:'IV',
        5:'V',
        9:'IX',
        10:'X',
        40:'XL',
        50:'L',
        90:'XC',
        100:'C',
        400:'CD',
        500:'D',
        900:'CM',
        1000:'M'
    }
    const symbolObjEntries = Object.entries(symbolObj);
    const symbolObjLength = symbolObjEntries.length;
    let answer = '';
    
    for (let i=symbolObjLength-1; i>=0; i--) {
        const [value, symbol] = symbolObjEntries[i];
        const count = num / value;
        if (count > 0) {
            answer += symbol.repeat(count);
            num %= value;
        }
    }
    
    return answer;
};