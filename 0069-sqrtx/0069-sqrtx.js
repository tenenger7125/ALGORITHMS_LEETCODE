/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let result = 1;
    
    while (x / result >= result) {
        result++;
    }
    
    return result - 1;
};