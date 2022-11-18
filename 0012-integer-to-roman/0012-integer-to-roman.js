/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const symbolArr = [
        ['I', 1],
        ['IV', 4],
        ['V', 5],
        ['IX', 9],
        ['X', 10],
        ['XL', 40],
        ['L', 50],
        ['XC', 90],
        ['C', 100],
        ['CD', 400],
        ['D', 500],
        ['CM', 900],
        ['M', 1000],
    ]
    const symbolArrLength = symbolArr.length;
    let answer = '';
    
    for (let i=symbolArrLength-1; i>=0; i--) {
        const [symbol, value] = symbolArr[i];
        const count = num / value;
        if (count > 0) {
            answer += symbol.repeat(count);
            num %= value;
        }
    }
    
    return answer;
};