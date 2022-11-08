/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const strX = x.toString();
    const n = strX.length;
    let start = 0;
    let end = n - 1;
    
    while (start < end) {
        if (strX[start++] !== strX[end--]) return false;
    }
    
    return true
};