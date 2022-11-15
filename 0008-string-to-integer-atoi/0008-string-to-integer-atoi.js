/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    return Number.isInteger(parseInt(s)) ? range(parseInt(s)) : 0;
    
    
    function range(num) {    
        if (num < -1 * 2 ** 31) return -1 * 2 ** 31;
        else if (2 ** 31 - 1 < num) return 2 ** 31 - 1;
        else return num;
    }
};