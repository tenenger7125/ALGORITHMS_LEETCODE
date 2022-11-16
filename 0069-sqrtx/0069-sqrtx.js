/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let result = 1;
    
    while (x / (result * result) >= 1) {
        result++;
    }
    
    return result - 1;
};