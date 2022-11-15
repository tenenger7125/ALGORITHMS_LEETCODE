/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const num = parseInt(s);
    return Number.isInteger(num) ? range(num) : 0;
    
    
    function range() {    
        if (num < -1 * 2 ** 31) return -1 * 2 ** 31;
        else if (2 ** 31 - 1 < num) return 2 ** 31 - 1;
        else return num;
    }
};