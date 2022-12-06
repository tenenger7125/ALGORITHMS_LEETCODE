/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const length = columnTitle.length;
    let multiple = 1;
    let answer = 0;
    
    for (let i=length-1; i>=0; i--) {
        const columnNumber = columnTitle.charCodeAt(i) - 64;
        multiple = (i === length - 1) ? 1 : multiple * 26;
        answer += columnNumber * multiple
    }
    
    return answer
};