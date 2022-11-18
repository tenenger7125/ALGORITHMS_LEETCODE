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
    let answer = '';
    const symbolObjKeys = Object.keys(symbolObj).sort((a,b)=>b-a);
    
    for (const key of symbolObjKeys) {
        let count = num / key;
        
        if (count >= 1) {
            num %= key;
            answer += symbolObj[key].repeat(count);
        }
    }
    
    return answer;
};