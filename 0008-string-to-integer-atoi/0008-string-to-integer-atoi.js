/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const num = parseInt(s);
    return Number.isInteger(num) ? Math.max(-1 * 2 ** 31, Math.min(num, 2 ** 31 - 1)) : 0;
};