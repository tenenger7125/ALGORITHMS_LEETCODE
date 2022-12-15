/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 1) return n === 1;
    
    return isPowerOfTwo(n / 2)
};