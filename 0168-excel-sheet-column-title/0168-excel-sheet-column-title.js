/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let answer = '';
    
    while (columnNumber) {
        const code = (--columnNumber) % 26;
        answer = String.fromCharCode(code+65) + answer;
        columnNumber = Math.floor(columnNumber/26)
    }
    
    return answer
};